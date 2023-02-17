import ClientLayout from '../../layouts/client';
import React from 'react';
import CardList from '../../components/cardList';
import TransactionList from '../../components/transactionList';
import PageTitle from '../../components/pageTitle';
import { useAppSelector } from '../../hooks/useAppSelector';
import EmptyBox from '../../components/enptyBox';

const DashboardPage = () => {
  const { user } = useAppSelector(state => state.authuser);


  return (
    <ClientLayout>
      <PageTitle title={'Dashboard'} />
      {!user?.isDisabledOperations

        ? <>
          <CardList />
          <TransactionList />
        </>
        : <EmptyBox text={'Operations for this user are disabled'} />
      }

    </ClientLayout>
  );
};

export default DashboardPage;
