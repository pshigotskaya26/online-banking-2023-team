import React from 'react';
import './index.css';
import ICard from "../../types/interfaces/ICard";

import CardItem from '../cardItem';


const CardList = (cards: ICard[]) => {
	return (
		<div className='cardList-container'>
			<h2>Card list:</h2>
			{cards.map((cardItem: ICard) => (
				<CardItem id={cardItem.id} card={cardItem} />
			))}
		</div>
	);
};

export default CardList;