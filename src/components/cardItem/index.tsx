import React from 'react';
import './index.css';
import ICard from '../../types/interfaces/ICard';


const CardItem = (card: ICard): JSX.Element => {
	return (
		<div className='card-item' id={card.id}>
			<div className='card-number'>
				<div className='card-number__text'>№ карты:</div>
				<div className='card-number__value'>{card.number}</div>
			</div>
			<div className='card-term'>
				<div className='card-term__text'>Срок действия:</div>
				<div className='card-term__value'>{card.expired}</div>
			</div>
			<div className='card-balance'>
				<div className='card-balance__text'>Баланс:</div>
				<div className='card-balance__text'>{card.balance} {card.currency}</div>
			</div>
		</div>
	);
};

export default CardItem;