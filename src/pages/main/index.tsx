import ClientLayout from '../../layouts/client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageTitle from '../../components/pageTitle';
import News from '../../components/news';
import { generateQueryString } from '../../utils/generateQueryString';
import { getArticles } from '../../utils/getArticles';
import { IArticle } from '../../types/interfaces/IArticle';
import { IResponseDataNews } from '../../types/interfaces/IResponseDataNews';

export const baseUrlServer = 'https://newsapi.org';

export const basePath = {
  everything: '/v2/everything',
};

export const arrBaseParamArticles = [
  { key: 'sources', value: 'financial-post' },
  { key: 'sortBy', value: 'publishedAt' },
  { key: 'pageSize', value: 10 },
  { key: 'apiKey', value: 'c31994017ec5449fb195a11328e566ca' },
];

const MainPage = () => {
  const [responseObject, setResponseObject] = useState([]);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    const response = await axios.get(
      `${baseUrlServer}${basePath.everything}${generateQueryString(
        arrBaseParamArticles,
      )}`,
    );
    const responseData = response.data;
    setResponseObject(responseData.articles);
  };

  return (
    <ClientLayout>
      <PageTitle title={'Main Page'} />
      <News articles={responseObject} />
    </ClientLayout>
  );
};

export default MainPage;
