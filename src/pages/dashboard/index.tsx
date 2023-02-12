import ClientLayout from '../../layouts/client';
import React, { useEffect, useState } from 'react';
import ICard from '../../types/interfaces/ICard';
import { ITransaction } from '../../types/interfaces/ITransaction';
import cardsData from '../../data/cards';
import transactionsData from '../../data/transactions';
import CardList from '../../components/cardList';
import TransactionList from '../../components/transactionList';
import PageTitle from '../../components/pageTitle';
import { useAppSelector } from '../../hooks/useAppSelector';
import UserRolesEnum from '../../types/enums/UserRolesEnum';
import { useActions } from '../../hooks/useActions';

const DashboardPage = () => {
  const { user } = useAppSelector((state) => state.authuser);
  const { cards: userCards } = useAppSelector((state) => state.usercards);

  const [cards, setCards] = useState<ICard[]>(cardsData);
  const [transactions, setTransactions] =
    useState<ITransaction[]>(transactionsData);

  const { getCardsByUserId } = useActions();

  useEffect(() => {
    if (user === null) {
      setCards([]);
      return;
    }
    if (
      user.role === UserRolesEnum.ADMIN ||
      user.role === UserRolesEnum.CLIENT
    ) {
      getCardsByUserId(user.id);
      setCards(userCards);
      return;
    }
  }, [user]);

  return (
    <ClientLayout>
      <PageTitle title={'Dashboard'} />
      <CardList cards={cards}></CardList>
      <TransactionList transactions={transactions}></TransactionList>
    </ClientLayout>
  );
};

export default DashboardPage;
