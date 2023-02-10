import ICard from '../types/interfaces/ICard';
import { ITransactionData } from '../types/interfaces/ITransaction';

class TransfersAPI {
  private findCardByNumber(number: number): ICard | undefined {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    return existCards.find((card) => card.number === number);
  }

  private getCardsWithUpdatedBalance({ cardTo, cardFrom, amount }: ITransactionData) {
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

  makeATransactionByNumberCard = (transactionData: ITransactionData) => {
    const cardToDB = this.findCardByNumber(transactionData.cardTo);
    if (cardToDB) {
      let cards = this.getCardsWithUpdatedBalance(transactionData);
      localStorage.setItem('cards', JSON.stringify(cards));
    }
  };

}

const transfersAPI = new TransfersAPI();
export default transfersAPI;
