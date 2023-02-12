import ICard from '../types/interfaces/ICard';
import { ITransferData } from '../types/interfaces/ITransaction';

class TransfersAPI {

  private findCardsByUserID(id: number): ICard[] | undefined {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    return existCards.filter(el => el.userid === id);
  }

  private findCardByNumber(number: number): ICard | undefined {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    return existCards.find((card) => card.number === number);
  }

  private getCardsWithUpdatedBalance({ cardTo, cardFrom, amount }: ITransferData) {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    const cardsUpdated = existCards.map((card) => {
      if (card.number === cardTo) {
        return { ...card, balance: card.balance + amount };
      } else if (card.number === cardFrom) {
        return { ...card, balance: card.balance - amount };
      } else {
        return card;
      }
    });
    return cardsUpdated;
  }

  fetchCardInfo = (number: number): ICard => {
    const card = this.findCardByNumber(number);
    if (!card) {
      throw new Error('Card not exist');
    }
    return card;
  };

  makeATransferByNumberCard = (transferData: ITransferData) => {
    const cardFrom = this.findCardByNumber(transferData.cardFrom);
    const cardToDB = this.findCardByNumber(transferData.cardTo);
    if (cardFrom && cardFrom.balance < transferData.amount) {
      throw new Error('Insufficient funds to transfer');
    }

    if (cardToDB) {
      let cards = this.getCardsWithUpdatedBalance(transferData);
      localStorage.setItem('cards', JSON.stringify(cards));
    }

    // if (cardFrom) {
    //   return {
    //     id: Date.now(),
    //     userid: cardFrom.userid,
    //     cardid: cardFrom.id,
    //     timestamp: Date.now(),
    //     value: transferData.amount,
    //     entityid: 1,
    //     entitytype: TransactionsTypesEnum.TRANSFER,
    //     targetid: 1,
    //     status: TransactionStatusEnum.SUCCESS,
    //   };
    // } else if (cardToDB) {
    //   return {
    //     id: Date.now(),
    //     userid: cardToDB.userid,
    //     cardid: cardToDB.id,
    //     timestamp: Date.now(),
    //     value: transferData.amount,
    //     entityid: 1,
    //     entitytype: TransactionsTypesEnum.TRANSFER,
    //     targetid: 1,
    //     status: TransactionStatusEnum.SUCCESS,
    //   };
    // } else {
    //   return {} as ITransaction;
    // }

  };

  fetchCardsByUserId(id: number): ICard[] {
    const cards = this.findCardsByUserID(id);
    return cards ? cards : [];
  }

}

const transfersAPI = new TransfersAPI();
export default transfersAPI;
