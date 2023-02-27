import ClientLayout from '../../layouts/client';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import CardList from '../../components/cardList';
import TransactionList from '../../components/transactionList';
import PageTitle from '../../components/pageTitle';
import ICredit from '../../types/interfaces/ICredit';
import ICard from '../../types/interfaces/ICard';
import { useActions } from '../../hooks/useActions';
import EmptyBox from '../../components/enptyBox';

const DashboardPage = () => {
  const { user } = useAppSelector((state) => state.authuser);
  const { cards: userCards, loadingCardsInfo } = useAppSelector(
    (state) => state.usercards,
  );
  const { credits: userCredits } = useAppSelector((state) => state.usercredits);

  const { getCardsByUserId, getCreditsByUserId } = useActions();

  const [cards, setCards] = useState<ICard[]>([]);
  const [credits, setCredits] = useState<ICredit[]>([]);

  useEffect(() => {
    setCards(userCards);
  }, [userCards, loadingCardsInfo]);

  useEffect(() => {
    setCredits(userCredits);
  }, [userCredits]);

  useEffect(() => {
    if (user !== null) {
      getCardsByUserId(user.id);
    }
  }, [user, loadingCardsInfo]);

  useEffect(() => {
    if (user !== null) {
      getCreditsByUserId(user.id, cards);
    }
  }, [user]);

  return (
    <ClientLayout>
      <PageTitle title={'Dashboard'} />
      {!user?.isDisabledOperations ? (
        <>
          <CardList cards={cards} credits={credits} />
          <TransactionList />
        </>
      ) : (
        <EmptyBox text={'Operations for this user are disabled'} />
      )}
    </ClientLayout>
  );
};

export default DashboardPage;
