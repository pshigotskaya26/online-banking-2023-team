import ICard from '../types/interfaces/ICard';
import axios from 'axios';
import { API_LAYER_KEY } from '../consts';

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
  ) => {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        cards[i].balance += convertedSalary;
      }
    }
    localStorage.setItem('cards', JSON.stringify(cards));
    return convertedSalary;
  };
}

const cardsAPI = new CardsAPI();
export default cardsAPI;
