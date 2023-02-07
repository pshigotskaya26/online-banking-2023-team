import React from 'react';
import './index.css';
import ICard from '../../types/interfaces/ICard';
import { getStringTerm } from "../../utils/formateDateTime";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingShield} from "@fortawesome/free-solid-svg-icons";
import { getStringCardNumber } from "../../utils/formateCardData";
import { getIdUser } from '../../utils/formateCardData';
import users from "../../data/users";

interface CardItemProps {
	card: ICard;
}

const CardItem: React.FC<CardItemProps> = (props) => {
	let cardUser = getIdUser(users, props.card.userid);
	console.log('cardUser: ', cardUser);

	return (
		<div className='card-item' style={{background: `url(/card-bg-${props.card.background}.png)`}}>
			<div className='card-logo flex'>
				<FontAwesomeIcon icon={faBuildingShield} size={"2x"} className={"text-blue-600"} />
				<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-1">Online-bank</span>
			</div>

			<div className='card-number'>
				<div className='card-number__value'>{getStringCardNumber(props.card.number)}</div>
			</div>
			<div className='card-term'>
				<div className='card-term__text'>VALID<br/>THRU</div>
				<div className='card-term__value'>{getStringTerm(props.card.expired)}</div>
			</div>

			<div className='card-user-data'>
				<div className='card-user-data__name'>{cardUser.name.toUpperCase()}</div>
			</div>
			<div className='card-balance'>
				<div className='card-balance__text'>Balance:</div>
				<div className='card-balance__value'>{props.card.balance} {props.card.currency}</div>
				<div className='card_balance__icon-eye'>1</div>
			</div>
			
			
		</div>
	);
};

export default CardItem;