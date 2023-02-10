import { IBaseParam } from '../types/interfaces/IBaseParam';
import { generateQueryString } from '../utils/generateQueryString';
import { baseUrlServer } from '../pages/main/index';
import { basePath } from '../pages/main/index';
import { arrBaseParamArticles } from '../pages/main/index';
import { IResponseDataNews } from '../types/interfaces/IResponseDataNews';

export const getArticles = async (
  queryParams: IBaseParam[],
): Promise<IResponseDataNews> => {
  const response = await fetch(
    `${baseUrlServer}${basePath.everything}${generateQueryString(
      arrBaseParamArticles,
    )}`,
  );

  const data = await response.json();

  return data;
};
