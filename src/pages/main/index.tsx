import ClientLayout from '../../layouts/client';
import React from 'react';
import PageTitle from '../../components/pageTitle';
import News from '../../components/news';
import { getArticles } from '../../utils/getArticles';

export const baseUrlServer = 'https://newsapi.org';

export const path = {
  everything: '/v2/everything',
};

export const apiKey = 'c31994017ec5449fb195a11328e566ca';

const arrBaseParamArticles = [
  { key: 'sources', value: 'financial-post' },
  { key: 'sortBy', value: 'publishedAt' },
  { key: 'pageSize', value: 10 },
];

const MainPage = () => {
  const articles = getArticles(arrBaseParamArticles);

  return (
    <ClientLayout>
      <PageTitle title={'Main Page'} />
      <News articles={articles} />
    </ClientLayout>
  );
};

export default MainPage;
