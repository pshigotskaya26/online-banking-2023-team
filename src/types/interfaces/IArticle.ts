import { ISourceArticle } from './ISourceArticle';

export interface IArticle {
  source: ISourceArticle;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}
