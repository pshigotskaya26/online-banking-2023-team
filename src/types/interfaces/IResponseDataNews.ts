import { IArticle } from './IArticle';

export interface IResponseDataNews {
  status: string;
  totalResults: number;
  articles: IArticle[];
}
