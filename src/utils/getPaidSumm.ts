import ICreditPayment from '../types/interfaces/ICreditPayment';

export const getPaidSumm = (payments: ICreditPayment[]): number => {
  let res = 0;

  if (payments) {
    payments.reduce((acc, payment) => {
      acc = payment.isPaid ? acc + payment.paymentValue : 0;
      return acc;
    }, 0);
  }

  return res;
};
