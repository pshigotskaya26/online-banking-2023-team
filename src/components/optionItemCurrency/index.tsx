import React, { ReactNode } from 'react';
import './index.css';

interface OptionItemCurrencyProps {
	value: string;
}

const OptionItemCurrency: React.FC<OptionItemCurrencyProps> = (props) => {
	return (
		<option className='select-currency__item' value={props.value}>{props.value}</option>
	);
};

export default OptionItemCurrency;