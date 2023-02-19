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
) => {
  const arrayOfPayments = [];
  let startDate = dayjs(dateStart).date();
  let endDate = startDate + termOfCredit;
  let idPayment = 0;

  for (let i = startDate; i < endDate; i++) {
    const creditPayment: ICreditPayment = {
      id: idPayment,
      dateOfContribution: dateStart,
      fine: 0,
      isPaid: false,
      status: CreditPaymentStatusEnum.IS_NOT_PAID,
    };

    arrayOfPayments.push(creditPayment);

    dateStart = dateStart + 86400000;
  }

  return arrayOfPayments;
};
