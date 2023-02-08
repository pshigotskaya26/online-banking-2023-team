import React from 'react';
import './index.css';
import ICard from '../../types/interfaces/ICard';
import { getStringTerm } from "../../utils/formateDateTime";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingShield} from "@fortawesome/free-solid-svg-icons";
import { getStringCardNumber } from "../../utils/formateCardData";
import { getIdUser } from '../../utils/formateCardData';
import users from "../../data/users";

import imgBlue from "../../assets/cardBackground/card-bg-blue.png";
import imgGreen from "../../assets/cardBackground/card-bg-green.png";
import imgOrange from "../../assets/cardBackground/card-bg-orange.png";
import imgViolett from "../../assets/cardBackground/card-bg-violett.png";
import imgRed from "../../assets/cardBackground/card-bg-red.png";

interface CardItemProps {
	card: ICard;
}

const CardItem: React.FC<CardItemProps> = (props) => {
	let cardUser = getIdUser(users, props.card.userid);
	console.log('cardUser: ', cardUser);

	let imageBackground;

	switch(props.card.background) {
		case "blue":
			imageBackground = imgBlue;
			break;

		case "green":
			imageBackground = imgGreen;
			break;
		
		case "orange":
			imageBackground = imgOrange;
			break;

		case "violett":
			imageBackground = imgViolett;
			break;

		case "red":
			imageBackground = imgRed;
			break;
	}

	return (
		<div className='card-item' style={{background: `url(${imageBackground})`}}>
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