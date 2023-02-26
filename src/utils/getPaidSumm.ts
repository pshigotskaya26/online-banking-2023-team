import ICreditPayment from '../types/interfaces/ICreditPayment';

export const getPaidSumm = (payments: ICreditPayment[]): number => {
  let res = 0;
  if (payments) {
    res = payments.reduce((acc, payment) => {
      return acc + (payment.isPaid ? payment.paymentValue : 0);
    }, 0);
  }
  return res;
};

export const getFineSumm = (payments: ICreditPayment[]): number => {
  let res = 0;
  if (payments) {
    res = payments.reduce((acc, payment) => {
      return acc + payment.fine;
    }, 0);
  }
  return res;
};
