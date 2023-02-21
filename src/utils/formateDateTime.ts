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

export const getStringDay = (time: number) => {
  return dayjs(time).format('DD');
};

export const getStringMonth = (time: number) => {
  return dayjs(time).format('MM');
};
