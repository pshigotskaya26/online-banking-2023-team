export const toggleActiveCreditButton = (booleanValue: boolean) => {
  const takeCreditButtonNode = document.querySelector('.button-take-credit');
  if (booleanValue) {
    takeCreditButtonNode?.classList.remove('no-active');
  } else {
    takeCreditButtonNode?.classList.add('no-active');
  }
};
