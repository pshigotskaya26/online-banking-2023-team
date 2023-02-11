import ICard from '../types/interfaces/ICard';

class CardsAPI {
  getCardsByUserId(userid: number): ICard[] {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');
    return cards.filter((card) => card.userid === userid);
  }

  updateUserCards(userid: number, newCards: ICard[]): void {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');
    const newCardList = cards
      .filter((card) => card.userid !== userid)
      .concat(newCards);
    localStorage.setItem('cards', JSON.stringify(newCardList));
  }
}

const cardsAPI = new CardsAPI();
export default cardsAPI;
