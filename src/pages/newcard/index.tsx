import ClientLayout from '../../layouts/client';
import React from 'react';
import PageTitle from '../../components/pageTitle';
import FormNewCard from '../../components/formNewCard';

const NewCardPage = () => {
  return (
    <ClientLayout>
      <PageTitle title={'Create new card'} />
      <FormNewCard />
    </ClientLayout>
  );
};

export default NewCardPage;
