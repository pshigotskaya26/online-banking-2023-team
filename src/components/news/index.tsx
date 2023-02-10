import React from 'react';

interface NewsProps {
  articles: IArticle[];
}

const News: React.FC<NewsProps> = (props) => {
  console.log('articles props: ', props.articles);
  return (
    <div className="news__container">
      <h2 className="news__title">News:</h2>
      <div className="news__content">123</div>
    </div>
  );
};

export default News;
