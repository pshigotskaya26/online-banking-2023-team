import ICard from '../types/interfaces/ICard';
import axios from 'axios';
import { API_LAYER_KEY } from '../consts';
import CardCurrencyEnum from '../types/enums/CardCurrencyEnum';

class CardsAPI {
  private findCardsByUserId(userID: number): ICard[] | undefined {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: Array<ICard> = JSON.parse(data);
    return existCards.filter((card) => card.userid === userID);
  }

  private getUserIdByCardID(cardID: number): number | undefined {
    const data = localStorage.getItem('cards') ?? '[]';
    const existedCards: Array<ICard> = JSON.parse(data);
    return existedCards.find((card) => card.id === cardID)?.userid;
  }

  getCardsByUserId(userid: number): ICard[] {
    const cards = this.findCardsByUserId(userid);
    if (!cards) {
      throw new Error('Cards is not exist');
    }
    return cards;
  }

  updateCards(newCards: ICard[]): ICard[] {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');
    const newCardList = cards
      .filter((card) => newCards.every((cd) => cd.id !== card.id))
      .concat(newCards);
    localStorage.setItem('cards', JSON.stringify(newCardList));
    return newCards;
  }

  addUserCard(newCard: ICard): ICard[] {
    //we need to save continuous numbering
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');
    newCard.id = cards.push(newCard);
    localStorage.setItem('cards', JSON.stringify(cards));
    return cards.filter((card) => card.userid === newCard.userid);
  }

  async getConvertedMoney(
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

  replenishBalance = async (
    cardId: number,
    cardCurrency: string,
    convertedSalary: number,
  ): Promise<ICard[]> => {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        cards[i].balance =
          Number(cards[i].balance.toFixed(2)) + convertedSalary;
      }
    }
    localStorage.setItem('cards', JSON.stringify(cards));
    const userID = this.getUserIdByCardID(cardId);
    const userCards: ICard[] | undefined = userID
      ? this.findCardsByUserId(userID)
      : undefined;

    return userCards ? userCards : [];
  };

  replenishBalanceForCredit = async (
    cardId: number,
    summOfCredit: number,
  ): Promise<ICard[]> => {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');
    let cardCurrency = '';

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        cardCurrency = cards[i].currency;
      }
    }

    const currencyFrom = CardCurrencyEnum.BYN;
    const convertedSummOfCredit = await this.getConvertedMoney(
      currencyFrom,
      cardCurrency,
      summOfCredit,
    );

    const convertedSummOfCreditFixed = Number(convertedSummOfCredit.toFixed(2));

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        cards[i].balance =
          Number(cards[i].balance.toFixed(2)) + convertedSummOfCreditFixed;
      }
    }
    localStorage.setItem('cards', JSON.stringify(cards));

    return cards;
  };
}

const cardsAPI = new CardsAPI();
export default cardsAPI;
