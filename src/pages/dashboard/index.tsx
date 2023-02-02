import ClientLayout from '../../layouts/client';
import React, { useState } from "react";
import ICard from "../../types/interfaces/ICard";
import { ITransaction } from "../../types/interfaces/ITransaction";
import cards from '../../data/cards';
import CardList from '../../components/cardList';


const DashboardPage = (): JSX.Element => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  return (
    <ClientLayout>
		<CardList cards={cards}></CardList>
      {/*<CardList cards={cards}></CardList>*/}
      {/*<TransactionList transactions={transactions}></TransactionList>*/}
    </ClientLayout>
  );
};

export default DashboardPage;
