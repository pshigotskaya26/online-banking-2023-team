import ClientLayout from '../../layouts/client';
import React, { useState } from 'react';
import { ITransaction } from '../../types/interfaces/ITransaction';
import transactionsData from '../../data/transactions';
import CardList from '../../components/cardList';
import TransactionList from '../../components/transactionList';
import PageTitle from '../../components/pageTitle';
import { useAppSelector } from '../../hooks/useAppSelector';
import EmptyBox from '../../components/enptyBox';

const DashboardPage = () => {
  const { user } = useAppSelector(state => state.authuser);
  const [transactions, setTransactions] =
    useState<ITransaction[]>(transactionsData);

  return (
    <ClientLayout>
      <PageTitle title={'Dashboard'} />
      {user?.isDisabledOperations

        ? <>
          <CardList></CardList>
          <TransactionList transactions={transactions}></TransactionList>
        </>
        : <EmptyBox text={"Operations for this user are disabled"}/>
      }

    </ClientLayout>
  );
};

export default DashboardPage;
