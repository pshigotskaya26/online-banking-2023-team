import React from 'react';
import { IArticle } from '../../types/interfaces/IArticle';

interface ArticleItemProps {
  article: IArticle;
}

const ArticleItem: React.FC<ArticleItemProps> = (props) => {
  return (
    <div className="article-item">
      <div className="article-item__image">
        <img src={`${props.article.urlToImage}`} alt={props.article.title} />
      </div>
      <div className="article-item__content">
        <h3 className="article-item__title">{props.article.title}</h3>
        <div className="article-item__description">
          {props.article.description}
        </div>
        <div className="article-item__link">
          <a href={`${props.article.url}`}>Read more...</a>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
