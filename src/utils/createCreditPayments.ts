import ICreditPayment from '../types/interfaces/ICreditPayment';
import CreditPaymentStatusEnum from '../types/enums/CreditPaymentStatusEnum';
import dayjs from 'dayjs';
/*
export default interface ICreditPayment {
	id: number;
	dateOfContribution: number;
	fine: number;
	isPaid: boolean;
      }

*/
export const createCreditPayments = (
  termOfCredit: number,
  dateStart: number,
  sumOfCredit: number,
) => {
  const arrayOfPayments = [];
  let startDate = dayjs(dateStart).date();
  let endDate = startDate + termOfCredit;
  let idPayment = 0;
  const paymentSum = Number((sumOfCredit / termOfCredit).toFixed(3));
  console.log('paymentValue: ', paymentSum);

  for (let i = startDate; i < endDate; i++) {
    const creditPayment: ICreditPayment = {
      id: idPayment,
      dateOfContribution: dateStart,
      paymentValue: paymentSum,
      fine: 0,
      isPaid: false,
      status: CreditPaymentStatusEnum.IS_NOT_PAID,
    };

    arrayOfPayments.push(creditPayment);

    dateStart = dateStart + 86400000;
    idPayment++;
  }

  return arrayOfPayments;
};
