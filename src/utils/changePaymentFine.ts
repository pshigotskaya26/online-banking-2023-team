import ICredit from '../types/interfaces/ICredit';

export const changePaymentFine = (
  creditId: number,
  paymentId: number,
  paymentFine: number,
) => {
  const credits: ICredit[] = JSON.parse(
    localStorage.getItem('credits') ?? '[]',
  );

  for (let i = 0; i < credits.length; i++) {
    if (credits[i].id === creditId) {
      for (let j = 0; j < credits[i].arrOfPayments.length; j++) {
        if (credits[i].arrOfPayments[j].id === paymentId) {
          credits[i].arrOfPayments[j].fine = Number(paymentFine);
        }
      }
    }
  }
  localStorage.setItem('credits', JSON.stringify(credits));
  return credits;
};
