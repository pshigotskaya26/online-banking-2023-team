import React from 'react';
import './index.css';
import ICard from '../../types/interfaces/ICard';
import { getStringTerm } from "../../utils/getStringTerm";

interface CardItemProps {
    card: ICard;
}

const CardItem: React.FC<CardItemProps> = (props) => {
	return (
		<div className='card-item'>
			<div className='card-number'>
				<div className='card-number__text'>№ карты:</div>
				<div className='card-number__value'>{props.card.number}</div>
			</div>
			<div className='card-term'>
				<div className='card-term__text'>Срок действия:</div>
				<div className='card-term__value'>{getStringTerm(props.card.expired)}</div>
			</div>
			<div className='card-balance'>
				<div className='card-balance__text'>Баланс:</div>
				<div className='card-balance__text'>{props.card.balance} {props.card.currency}</div>
			</div>
		</div>
	);
};

export default CardItem;