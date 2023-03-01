import ICard from '../types/interfaces/ICard';
import axios from 'axios';
import { API_LAYER_KEY } from '../consts';
import CardCurrencyEnum from '../types/enums/CardCurrencyEnum';
import ICredit from '../types/interfaces/ICredit';
import { ITransaction } from '../types/interfaces/ITransaction';
import CreditPaymentStatusEnum from '../types/enums/CreditPaymentStatusEnum';

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

  replenishBalance = async (cardId: number, convertedSalary: number) => {
    const cards: ICard[] = JSON.parse(localStorage.getItem('cards') ?? '[]');
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        cards[i].balance =
          Number(cards[i].balance.toFixed(2)) + convertedSalary;
      }
    }
    localStorage.setItem('cards', JSON.stringify(cards));
    return convertedSalary;
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

  decreaseTheBalanceForPayment = (
    idPayment: number,
    credits: ICredit[],
    cards: ICard[],
    credit: ICredit,
  ): ICard[] => {
    credits.forEach((creditItem) => {
      if (creditItem.id === credit.id) {
        let creditCardId = creditItem.cardId;

        const foundedCard = cards.filter(
          (cardItem) => cardItem.id === creditCardId,
        );

        if (foundedCard[0] !== undefined) {
          creditItem.arrOfPayments.forEach((paymentItem) => {
            if (paymentItem.id === idPayment) {
              let sumPaymentFine = Number(
                (paymentItem.paymentValue + paymentItem.fine).toFixed(2),
              );
              foundedCard[0].balance = Number(
                (foundedCard[0].balance - sumPaymentFine).toFixed(2),
              );
            }
          });
        }
        this.updateCards(foundedCard);
      }
    });
    return cards;
  };

  decreaseTheBalanceForCredit = (
    idPayment: number,
    credits: ICredit[],
    cards: ICard[],
    credit: ICredit,
  ): ICard[] => {
    credits.forEach((creditItem) => {
      if (creditItem.id === credit.id) {
        let creditCardId = creditItem.cardId;

        const foundedCard = cards.filter(
          (cardItem) => cardItem.id === creditCardId,
        );

        if (foundedCard[0] !== undefined) {
          let sumAllPaymentsFines = 0;

          creditItem.arrOfPayments.forEach((paymentItem) => {
            if (paymentItem.status === CreditPaymentStatusEnum.IS_NOT_PAID) {
              let sumPaymentFine = Number(
                (paymentItem.paymentValue + paymentItem.fine).toFixed(2),
              );

              console.log('sumPaymentFine: ', sumPaymentFine);

              sumAllPaymentsFines = Number(
                (sumAllPaymentsFines + sumPaymentFine).toFixed(2),
              );
            }
          });

          if (foundedCard[0].balance >= sumAllPaymentsFines) {
            console.log(
              'foundedCard[0].balance BEFORE: ',
              foundedCard[0].balance,
            );
            foundedCard[0].balance = Number(
              (foundedCard[0].balance - sumAllPaymentsFines).toFixed(2),
            );
          }

          console.log('foundedCard[0].balance AFTER: ', foundedCard[0].balance);
        }
        this.updateCards(foundedCard);
      }
    });
    return cards;
  };
}

const cardsAPI = new CardsAPI();
export default cardsAPI;
