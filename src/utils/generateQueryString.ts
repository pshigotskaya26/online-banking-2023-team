import { IBaseParam } from '../types/interfaces/IBaseParam';

export const generateQueryString = (queryParams: IBaseParam[]) => {
  if (queryParams.length) {
    return `?${queryParams
      .map((item) => `${item.key}=${item.value}`)
      .join('&')}`;
  } else {
    return '';
  }
};
