import React from 'react';
import { getStringCardNumber } from "../../utils/formateCardData";
import { changeCardNumber } from "../../utils/formateCardData";

interface CardNumberProps {
	isShownData: boolean;
	cardNumber: number;
}

const CardNumber: React.FC<CardNumberProps> = (props) => {
	let stringCardNumber = getStringCardNumber(props.cardNumber);

	let changedCardNumber = changeCardNumber(props.isShownData, stringCardNumber);
	
	return (
		<div className='card-number__value'>{changedCardNumber}</div>
	);
};

export default CardNumber;