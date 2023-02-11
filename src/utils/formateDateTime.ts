import dayjs from 'dayjs';

export const getStringDate = (time: number) => {
  return dayjs(time).format('DD-MM-YYYY');
};

export const getStringTerm = (time: number) => {
  return dayjs.unix(time).format('MM/YY');
};

export const getStringTime = (time: number) => {
  return dayjs(time).format('hh:mm:ss');
};
