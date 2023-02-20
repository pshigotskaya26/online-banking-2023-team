import ICreditPayment from '../types/interfaces/ICreditPayment';
import CreditPaymentStatusEnum from '../types/enums/CreditPaymentStatusEnum';
import dayjs from 'dayjs';
import CreditStatusButtonEnum from '../types/enums/CreditStatusButtonEnum';

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
  let statusOfButtonPay = '';
  console.log('paymentValue: ', paymentSum);

  for (let i = startDate; i < endDate; i++) {
    if (i === startDate) {
      statusOfButtonPay = CreditStatusButtonEnum.ACTIVE;
    } else {
      statusOfButtonPay = CreditStatusButtonEnum.NO_ACTIVE;
    }
    const creditPayment: ICreditPayment = {
      id: idPayment,
      dateOfContribution: dateStart,
      paymentValue: paymentSum,
      fine: 0,
      isPaid: false,
      status: CreditPaymentStatusEnum.IS_NOT_PAID,
      statusOfButton: statusOfButtonPay,
    };

    arrayOfPayments.push(creditPayment);

    dateStart = dateStart + 86400000;
    idPayment++;
  }

  return arrayOfPayments;
};
