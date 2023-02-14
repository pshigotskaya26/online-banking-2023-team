import ICard from '../types/interfaces/ICard';

class CardsAPI {
  getCardsByUserId(userid: number): ICard[] {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');
    return cards.filter((card) => card.userid === userid);
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

  replenishBalance(cardId: number): ICard[] {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        cards[i].balance += 200;
      }
    }
    localStorage.setItem('cards', JSON.stringify(cards));
    return cards;
  }
}

const cardsAPI = new CardsAPI();
export default cardsAPI;
