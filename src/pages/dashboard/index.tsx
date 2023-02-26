import ClientLayout from '../../layouts/client';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ITransaction } from '../../types/interfaces/ITransaction';
import transactionsData from '../../data/transactions';
import CardList from '../../components/cardList';
import TransactionList from '../../components/transactionList';
import PageTitle from '../../components/pageTitle';
import ICredit from '../../types/interfaces/ICredit';
import ICard from '../../types/interfaces/ICard';
import { useActions } from '../../hooks/useActions';

const DashboardPage = () => {
  const [transactions, setTransactions] =
    useState<ITransaction[]>(transactionsData);

  const { user } = useAppSelector((state) => state.authuser);

  const { cards: userCards } = useAppSelector((state) => state.usercards);
  const { credits: userCredits } = useAppSelector((state) => state.usercredits);

  const { getCardsByUserId } = useActions();
  const { getCreditsByUserId } = useActions();

  const [cards, setCards] = useState<ICard[]>([]);
  const [credits, setCredits] = useState<ICredit[]>([]);

  useEffect(() => {
    setCards(userCards);
  }, [userCards]);

  useEffect(() => {
    setCredits(userCredits);
  }, [userCredits]);

  useEffect(() => {
    if (user !== null) {
      getCardsByUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    if (user !== null) {
      getCreditsByUserId(user.id, cards);
    }
  }, [user]);

  return (
    <ClientLayout>
      <PageTitle title={'Dashboard'} />
      <CardList cards={cards} credits={credits}></CardList>
      <TransactionList transactions={transactions}></TransactionList>
    </ClientLayout>
  );
};

export default DashboardPage;
