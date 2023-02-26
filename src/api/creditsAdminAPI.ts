import { getStringDate } from '../utils/formateDateTime';
import ICredit from '../types/interfaces/ICredit';
import ICreditPayment from '../types/interfaces/ICreditPayment';
import { ILineGraphicData } from '../types/interfaces/ILineGraphicData';

class CreditsAdminAPI {
  private findCredits(): Array<ICredit> | undefined {
    const data = localStorage.getItem('credits') ?? '[]';
    return JSON.parse(data);
  }

  private findCreditById(id: number): ICredit | undefined {
    const data = localStorage.getItem('credits') ?? '[]';
    const credits: ICredit[] = JSON.parse(data);
    return credits.find((credit) => credit.id === id);
  }

  private getPaymentsByDays(days: number): ICreditPayment[] | undefined {
    const credits = localStorage.getItem('credits') ?? '[]';
    return JSON.parse(credits)
      .map((credit: ICredit) => credit.arrOfPayments)
      .flat(Infinity)
      .filter((n: ICreditPayment) => n)
      .filter(
        (payment: ICreditPayment) =>
          payment.dateOfContribution <= Date.now() &&
          payment.dateOfContribution >= days * 86400000,
      );
  }

  private groupDataForGraphic(payments: ICreditPayment[]): ILineGraphicData[] {
    const data = payments.reduce((acc, el) => {
      const date = getStringDate(el.dateOfContribution);

      if (acc.has(date)) {
        acc.set(date, acc.get(date) + el.paymentValue || 0);
      } else {
        acc.set(date, el.paymentValue || 0);
      }

      return acc;
    }, new Map());
    let result: ILineGraphicData[] = [];

    data.forEach((value, key) => {
      result.push({
        name: key,
        payment: value,
      });
    });

    return result;
  }

  private getCreditsByDay(credits: ICredit[]): ILineGraphicData[] {
    const data = credits.reduce((acc, el) => {
      const date = getStringDate(el.dateStart);

      if (acc.has(date)) {
        acc.set(date, acc.get(date) + 1);
      } else {
        acc.set(date, 1);
      }

      return acc;
    }, new Map());

    let result: ILineGraphicData[] = [];

    data.forEach((value, key) => {
      result.push({
        name: key,
        payment: value,
      });
    });

    return result;
  }

  fetchCredits(): ICredit[] {
    const credits = this.findCredits();
    if (!credits) {
      throw new Error('Credits not exist');
    }

    return credits;
  }

  fetchPaymentsByDays(days: number = 7): ILineGraphicData[] {
    const payments = this.getPaymentsByDays(days);
    let res: ILineGraphicData[] = [];
    if (payments) {
      res = this.groupDataForGraphic(payments);
    }
    return res;
  }

  fetchCreditsByDays(days: number = 7): ILineGraphicData[] {
    const credits = this.findCredits();
    let res: ILineGraphicData[] = [];
    if (credits) {
      res = this.getCreditsByDay(credits);
    }
    return res;
  }

  fetchCreditInfoByID(id: number): ICredit {
    const credit = this.findCreditById(id);
    if (!credit) {
      throw new Error('Credit is not exist');
    }
    return credit;
  }
}

const creditsAdminAPI = new CreditsAdminAPI();
export default creditsAdminAPI;
