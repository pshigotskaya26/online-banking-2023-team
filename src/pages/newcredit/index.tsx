import ClientLayout from '../../layouts/client';
import React from 'react';
import PageTitle from '../../components/pageTitle';
import FormNewCredit from '../../components/formNewCredit';

const NewCreditPage = () => {
  return (
    <ClientLayout>
      <PageTitle title={'Take a credit'} />
      <FormNewCredit />
    </ClientLayout>
  );
};

export default NewCreditPage;
