import React from 'react';
import { IArticle } from '../../types/interfaces/IArticle';
import ArticleItem from '../../components/articleItem';

interface NewsProps {
  articles: IArticle[];
}

const News: React.FC<NewsProps> = (props) => {
  return (
    <div className="news__container">
      <h2 className="news__title">News:</h2>
      <div className="news__content">
        {props.articles.map((articleItem: IArticle, index) => (
          <ArticleItem key={index} article={articleItem} />
        ))}
      </div>
    </div>
  );
};

export default News;
