import ClientLayout from '../../layouts/client';
import React, { useState } from 'react';
import { ITransaction } from '../../types/interfaces/ITransaction';
import transactionsData from '../../data/transactions';
import CardList from '../../components/cardList';
import TransactionList from '../../components/transactionList';
import PageTitle from '../../components/pageTitle';

const DashboardPage = () => {
  const [transactions, setTransactions] =
    useState<ITransaction[]>(transactionsData);

  return (
    <ClientLayout>
      <PageTitle title={'Dashboard'} />
      <CardList></CardList>
      <TransactionList transactions={transactions}></TransactionList>
    </ClientLayout>
  );
};

export default DashboardPage;
