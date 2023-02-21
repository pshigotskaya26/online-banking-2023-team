export const toggleActiveCreditButtonAllPay = (
  booleanValue: boolean,
  idCreditItem: number,
) => {
  const myCreditsButtonsAllPayNode =
    document.querySelectorAll('.button-pay-all');
  if (booleanValue) {
    myCreditsButtonsAllPayNode[idCreditItem - 1]?.classList.remove('no-active');
  } else {
    myCreditsButtonsAllPayNode[idCreditItem - 1]?.classList.add('no-active');
  }
};
