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
    /*
    const credits: ICredit[] = JSON.parse(
      localStorage.getItem('credits') ?? '[]',
    );


    return credits.filter((credit) => credit.userId === userid);
    */
    //.map()

    const currentDate = Date.now();
    const currentDay = Number(getStringDay(currentDate));
    const currentMonth = Number(getStringMonth(currentDate));

    const credits: ICredit[] = JSON.parse(
      localStorage.getItem('credits') ?? '[]',
    );

    const userCredits = credits.filter((credit) => credit.userId === userid);

    //assign fines to paymentItem
    userCredits.forEach((creditItem) => {
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

    //assign general Fine to creditItem

    userCredits.forEach((creditItem) => {
      let sumFine = 0;
      creditItem.arrOfPayments.forEach((paymentItem) => {
        sumFine += paymentItem.fine;
      });
      creditItem.fine = sumFine;
    });

    //do clickable buttons depending on the current balance on the card
    /*
    userCredits.forEach((creditItem) => {
      let cardId = creditItem.cardId;
      let cardBalance = userCards.filter(
        (cardItem) => cardItem.id === cardId,
      )[0].balance;

      console.log('cardBalance: ', cardBalance);

      creditItem.arrOfPayments.forEach((paymentItem) => {
        if (
          paymentItem.status === CreditPaymentStatusEnum.IS_NOT_PAID &&
          paymentItem.paymentValue <= cardBalance
        ) {
          console.log('cardBalance: before ', cardBalance);
          cardBalance = cardBalance - paymentItem.paymentValue;
          console.log('cardBalance: after-- ', cardBalance);
          paymentItem.statusOfButton = CreditStatusButtonEnum.ACTIVE;
        }
      });
    });
*/

    localStorage.setItem('credits', JSON.stringify(userCredits));
    this.updateCredits(userCredits);
    return userCredits;
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
