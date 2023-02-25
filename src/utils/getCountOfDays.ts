export const getCountOfDays = (timeCurrent: number, timePayment: number) => {
  const difference = timeCurrent - timePayment;
  const totalDays = Math.round(difference / (1000 * 3600 * 24));
  return totalDays;
};
