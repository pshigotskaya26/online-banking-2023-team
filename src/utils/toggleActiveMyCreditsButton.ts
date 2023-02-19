export const toggleActiveMyCreditsButton = (booleanValue: boolean) => {
  const myCreditsButtonNode = document.querySelector('.button-my-credits');
  if (booleanValue) {
    myCreditsButtonNode?.classList.remove('no-active');
  } else {
    myCreditsButtonNode?.classList.add('no-active');
  }
};
