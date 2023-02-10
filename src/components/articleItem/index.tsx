import React from 'react';
import { IArticle } from '../../types/interfaces/IArticle';
import './index.css';

interface ArticleItemProps {
  article: IArticle;
}

const ArticleItem: React.FC<ArticleItemProps> = (props) => {
  return (
    <div className="article-item">
      <div className="article-item__image">
        <img
          className="article-image"
          src={`${props.article.urlToImage}`}
          alt={`image ${props.article.title}`}
        />
      </div>
      <div className="article-item__content">
        <h3 className="article-item__title">{props.article.title}</h3>
        <div className="article-item__description">
          {props.article.description}
        </div>
        <div className="article-item__link">
          <a
            className="article-link"
            href={`${props.article.url}`}
            target="_blank"
          >
            Read more...
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
