import React, {useState} from 'react';
import './index.css';
import ICard from '../../types/interfaces/ICard';
import { getStringTerm } from "../../utils/formateDateTime";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuildingShield} from "@fortawesome/free-solid-svg-icons";
import { getStringCardNumber } from "../../utils/formateCardData";
import { getCardUserById } from '../../utils/formateCardData';
import { getBackgroundImageByColor } from "../../utils/getBackgroundImageByColor";
import users from "../../data/users";
import CardIconEye from '../cardIconEye';
import CardNumber from '../cardNumber';
import CardBalance from '../cardBalance';

interface CardItemProps {
	card: ICard;
}

const CardItem: React.FC<CardItemProps> = (props) => {
	const [isShownData, setShownData] = useState<boolean>(props.card.isShown);

	let cardUser = getCardUserById(users, props.card.userid);
	let imageBackground = getBackgroundImageByColor(props.card.background);

	const changeIconEye = () => {
		if (isShownData === true) {
			setShownData(false);
		}
		else {
			setShownData(true);
		}
	}

	return (
		<div className='card-item' style={{background: `url(${imageBackground})`}}>
			<div className='card-logo flex'>
				<FontAwesomeIcon icon={faBuildingShield} size={"2x"} className={"text-blue-600"} />
				<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-1">Online-bank</span>
			</div>

			<div className='card-number'>
				<CardNumber isShownData={isShownData} cardNumber={props.card.number} />
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
				<CardBalance isShownData={isShownData} cardBalance={props.card.balance} cardCurrency={props.card.currency} />
				<div className='card_balance__icon-eye'>
					<div className='icon-eye'onClick={changeIconEye}>
						<CardIconEye isShownData={isShownData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardItem;