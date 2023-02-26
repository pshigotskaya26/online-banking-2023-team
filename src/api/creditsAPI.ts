import ICredit from '../types/interfaces/ICredit';
import ICard from '../types/interfaces/ICard';
import CreditPaymentStatusEnum from '../types/enums/CreditPaymentStatusEnum';
import CreditPaymentFineEnum from '../types/enums/CreditPaymentFineEnum';
import CreditStatusButtonEnum from '../types/enums/CreditStatusButtonEnum';
import { getStringDay } from '../utils/formateDateTime';
import { getStringMonth } from '../utils/formateDateTime';
import { getCountOfDays } from '../utils/getCountOfDays';

class CreditsAPI {
  getCreditsByUserId(userid: number, userCards: ICard[]): ICredit[] {
    const credits: ICredit[] = JSON.parse(
      localStorage.getItem('credits') ?? '[]',
    );

    const userCredits = credits.filter((credit) => credit.userId === userid);
    const paymentsWithFines = this.addFineToPayment(userCredits);
    const creditsWithFines = this.addFineToCredit(paymentsWithFines);
    const creditsWithStatusButton = this.setStatusToButtonsPay(
      creditsWithFines,
      userCards,
    );

    localStorage.setItem('credits', JSON.stringify(creditsWithStatusButton));
    this.updateCredits(creditsWithStatusButton);
    return creditsWithStatusButton;
  }

  addFineToPayment(credits: ICredit[]): ICredit[] {
    const currentDate = Date.now();
    const currentDay = Number(getStringDay(currentDate));
    const currentMonth = Number(getStringMonth(currentDate));

    credits.forEach((creditItem) => {
      creditItem.arrOfPayments.forEach((paymentItem) => {
        const paymentDay = Number(getStringDay(paymentItem.dateOfContribution));
        const paymentMonth = Number(
          getStringMonth(paymentItem.dateOfContribution),
        );
        //if todayDate === paymentDate
        if (
          paymentItem.status === CreditPaymentStatusEnum.IS_NOT_PAID &&
          currentDay === paymentDay &&
          currentMonth === paymentMonth
        ) {
          paymentItem.fine = Number(CreditPaymentFineEnum.ZERO);
        }
        //if todayDate > paymentDate
        if (
          paymentItem.status === CreditPaymentStatusEnum.IS_NOT_PAID &&
          ((currentDay > paymentDay && currentMonth >= paymentMonth) ||
            (currentDay < paymentDay && currentMonth > paymentMonth))
        ) {
          const differ = getCountOfDays(
            currentDate,
            paymentItem.dateOfContribution,
          );
          paymentItem.fine = Number(CreditPaymentFineEnum.FIVE) * differ;
        }
      });
    });
    return credits;
  }

  addFineToCredit(credits: ICredit[]): ICredit[] {
    credits.forEach((creditItem) => {
      let sumFine = 0;
      creditItem.arrOfPayments.forEach((paymentItem) => {
        sumFine += paymentItem.fine;
      });
      creditItem.fine = sumFine;
    });
    return credits;
  }

  setStatusToButtonsPay(credits: ICredit[], cards: ICard[]): ICredit[] {
    credits.forEach((creditItem) => {
      let cardId = creditItem.cardId;
      //let arrCards = userCards;
      let balanceCard: number;

      const foundedCard = cards.filter((cardItem) => cardItem.id === cardId);

      if (foundedCard[0] !== undefined) {
        let cardBalance = foundedCard[0].balance;

        creditItem.arrOfPayments.forEach((paymentItem) => {
          if (
            paymentItem.status === CreditPaymentStatusEnum.IS_NOT_PAID &&
            paymentItem.paymentValue <= cardBalance
          ) {
            cardBalance = cardBalance - paymentItem.paymentValue;
            paymentItem.statusOfButton = CreditStatusButtonEnum.ACTIVE;
          } else if (
            paymentItem.status === CreditPaymentStatusEnum.IS_NOT_PAID &&
            paymentItem.paymentValue > cardBalance
          ) {
            paymentItem.statusOfButton = CreditStatusButtonEnum.NO_ACTIVE;
          }
        });
      }
    });
    return credits;
  }

  addUserCredit(newCredit: ICredit): ICredit[] {
    const credits: ICredit[] = JSON.parse(
      localStorage.getItem('credits') ?? '[]',
    );
    newCredit.id = credits.push(newCredit);
    localStorage.setItem('credits', JSON.stringify(credits));
    return credits.filter((credit) => credit.userId === newCredit.userId);
  }

  updateCredits(newCredits: ICredit[]): ICredit[] {
    const credits: ICredit[] = JSON.parse(
      localStorage.getItem('credits') ?? '[]',
    );
    const newCreditList = credits
      .filter((credit) => newCredits.every((cd) => cd.id !== credit.id))
      .concat(newCredits);
    localStorage.setItem('credits', JSON.stringify(newCreditList));
    return newCredits;
  }
}

const creditsAPI = new CreditsAPI();
export default creditsAPI;
