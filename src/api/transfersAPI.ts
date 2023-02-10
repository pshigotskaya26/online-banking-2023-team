import ICard from '../types/interfaces/ICard';

class TransfersAPI {
  private findCardByNumber(number: number): ICard | undefined {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    return existCards.find((card) => card.number === number);
  }

  fetchCardInfo = (number: number): ICard => {
    const card = this.findCardByNumber(number);
    if (!card) {
      throw new Error('Card not exist');
    }
    return card;
  };

}

const transfersAPI = new TransfersAPI();
export default transfersAPI;
