import ClientLayout from "../../layouts/client";
import React, {useState} from 'react';
import PageTitle from '../../components/pageTitle';
import FormNewCard from "../../components/formNewCard";
import ICard from '../../types/interfaces/ICard';
import cardsData from '../../data/cards';

const NewCardPage = () => {
	const [cards, setCards] = useState<ICard[]>(cardsData);

	return (
		<ClientLayout>
			<PageTitle title={"Create new card"} />
			<FormNewCard />
		</ClientLayout>
	);
};

export default NewCardPage;