import ClientLayout from '../../layouts/client';
import React, {useState} from 'react';
import ICard from '../../types/interfaces/ICard';
import ITransaction from '../../types/interfaces/ITransaction';
import cardsData from '../../data/cards';
import users from '../../data/users';
import IUser from '../../types/interfaces/IUser';
import transactionsData from '../../data/transactions';
import CardList from '../../components/cardList';
import TransactionList from '../../components/transactionList';
import PageTitle from '../../components/pageTitle';

const DashboardPage = () => {
	const [cards, setCards] = useState<ICard[]>(cardsData);

	const [transactions, setTransactions] =
		useState<ITransaction[]>(transactionsData);

	return (
		<ClientLayout>
			<PageTitle title={"Dashboard"} />
			<CardList cards={cards}></CardList>
			<TransactionList transactions={transactions}></TransactionList>
		</ClientLayout>
	);
};

export default DashboardPage;
