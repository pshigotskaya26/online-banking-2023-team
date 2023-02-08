import React from 'react';
import { getStringCardBalance } from "../../utils/formateCardData";
import { changeCardBalance } from "../../utils/formateCardData";

interface CardBalanceProps {
	cardBalance: number;
	cardCurrency: string;
	isShownData: boolean;
}

const CardBalance: React.FC<CardBalanceProps> = (props) => {
	let stringCardBalance = getStringCardBalance(props.cardBalance);
	let changedCardBalance = changeCardBalance(props.isShownData, stringCardBalance);

	return (
		<div className='card-balance__value'>{changedCardBalance} {props.cardCurrency}</div>
	);
};

export default CardBalance;