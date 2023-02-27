import ICard from '../types/interfaces/ICard';

export const defineNumberCard = (cards: ICard[], idCard: number) => {
  let cardNumber = 0;

  cards.forEach((cardItem) => {
    if (cardItem.id === idCard) {
      cardNumber = cardItem.number;
    }
  });
  return cardNumber;
};
