import ICard from '../types/interfaces/ICard';
import axios from 'axios';
import CardCurrencyEnum from '../types/enums/CardCurrencyEnum';

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

  private async getConvertedMoney(
    currencyFrom: string,
    currencyTo: string,
    amount: number,
  ): Promise<number> {
    let config = {
      headers: {
        apikey: 'CKhfOVDTNzgYebZQ4228NRj9i4uQVWWZ',
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

  replenishBalance = async (cardId: number, cardCurrency: string) => {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');
    const currencyFrom = CardCurrencyEnum.BYN;
    const currencyTo = cardCurrency;
    const salary = 1000;

    const convertedSalary = await this.getConvertedMoney(
      currencyFrom,
      currencyTo,
      salary,
    );

    const convertedSalaryFixed = Number(convertedSalary.toFixed(2));

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        cards[i].balance =
          Number(cards[i].balance.toFixed(2)) + convertedSalaryFixed;
      }
    }
    localStorage.setItem('cards', JSON.stringify(cards));
    return cards;
  };

  replenishBalanceForCredit = async (cardId: number, summOfCredit: number) => {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');
    let cardCurrency = '';

    for (let i = 0; i < cards.length; i++) {
      console.log('cards[i]-------------------------------: ', cards[i]);
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
    console.log('cards after taking credit: ', cards);
    return cards;
  };
}

const cardsAPI = new CardsAPI();
export default cardsAPI;
