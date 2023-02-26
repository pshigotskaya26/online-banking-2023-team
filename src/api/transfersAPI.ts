import ICard from '../types/interfaces/ICard';
import { ITransferData } from '../types/interfaces/ITransaction';
import axios from 'axios';
import { API_LAYER_KEY } from '../consts';
import transactionsAPI from './transactionsAPI';

class TransfersAPI {
  private findCardsByUserID(id: number): ICard[] | undefined {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    return existCards.filter((el) => el.userid === id);
  }

  private async getConvertedMoney(
    currencyFrom: string,
    currencyTo: string,
    amount: number,
  ): Promise<number> {
    let config = {
      headers: {
apikey: API_LAYER_KEY,
      },
    };
    const res = await axios.get(
      `https://api.apilayer.com/fixer/convert?to=${currencyTo}&from=${currencyFrom}&amount=${amount}`,
      config,
    );

    if (res.status === 200) {
      const data = res.data;
      return data.result;
    } else {
      throw new Error('Не удалось получить курс валют лоя перевода');
    }
  }

  private findCardByNumber(number: number): ICard | undefined {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    return existCards.find((card) => card.number === number);
  }

  private getCardsWithUpdatedBalance({
    cardTo,
    cardFrom,
    amountFrom,
    amountTo,
  }: ITransferData) {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    return existCards.map((card) => {
      if (card.number === cardTo) {
        return {
          ...card,
          balance: amountTo
            ? card.balance + amountTo
            : card.balance + amountFrom,
        };
      } else if (card.number === cardFrom) {
        return { ...card, balance: card.balance - amountFrom };
      } else {
        return card;
      }
    });
  }

  fetchCardInfo = (number: number): ICard => {
    const card = this.findCardByNumber(number);
    if (!card) {
      throw new Error('Card not exist');
    }
    return card;
  };

  makeATransferByNumberCard = async (transferData: ITransferData) => {
    const cardFrom = this.findCardByNumber(transferData.cardFrom);
    const cardToDB = this.findCardByNumber(transferData.cardTo);

    if (cardFrom && cardFrom.balance < transferData.amountFrom) {
      throw new Error('Insufficient funds to transfer');
    }

    if (cardToDB && cardFrom) {
      let cards: ICard[];
      if (cardFrom.currency !== cardToDB.currency) {
        const convertedMoney = await this.getConvertedMoney(
          cardFrom.currency,
          cardToDB.currency,
          transferData.amountFrom,
        );
        transferData = {
          ...transferData,
          amountTo: +convertedMoney.toFixed(2),
        };
        cards = this.getCardsWithUpdatedBalance(transferData);
      } else {
        cards = this.getCardsWithUpdatedBalance(transferData);
      }
      await transactionsAPI.createTransactionTransfer(transferData);

      this.getCardsWithUpdatedBalance(transferData);
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  };

  fetchCardsByUserId(id: number): ICard[] {
    const cards = this.findCardsByUserID(id);
    return cards ? cards : [];
  }
}

const transfersAPI = new TransfersAPI();
export default transfersAPI;
