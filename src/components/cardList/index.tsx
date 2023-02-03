import React from 'react';
import './index.css';
import ICard from "../../types/interfaces/ICard";

import CardItem from '../cardItem';

interface CardListProps {
    cards: ICard[];
}

const CardList: React.FC<CardListProps> = (props) => {
	return (
		<div className='cardList-container'>
			<h2 className='cardList__title'>Card list:</h2>
			<div className='cardList__content'>
				{props.cards.map((cardItem: ICard,index: number) => (
					<CardItem key={index} card={cardItem} />
				))}
			</div>
			<div className='cardList__button'>
				<button className='button button-add'>Add card</button>
			</div>
		</div>
	);
};

export default CardList;