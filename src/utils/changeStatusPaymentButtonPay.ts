import ICredit from '../types/interfaces/ICredit';

export const changeStatusPaymentButtonPay = (
  creditId: number,
  paymentId: number,
  status: string,
) => {
  const credits: ICredit[] = JSON.parse(
    localStorage.getItem('credits') ?? '[]',
  );

  for (let i = 0; i < credits.length; i++) {
    if (credits[i].id === creditId) {
      for (let j = 0; j < credits[i].arrOfPayments.length; j++) {
        if (credits[i].arrOfPayments[j].id === paymentId) {
          credits[i].arrOfPayments[j].statusOfButton = status;
        }
      }
    }
  }
  localStorage.setItem('credits', JSON.stringify(credits));
  return credits;
};
