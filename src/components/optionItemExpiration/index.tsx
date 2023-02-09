import React, { ReactNode } from 'react';
import './index.css';

interface OptionItemExpirationProps {
	value: string;
}

const OptionItemExpiration: React.FC<OptionItemExpirationProps> = (props) => {
	return (
		<option className='select-expiration__item' value={props.value}>
			{(props.value === '1') ? `${props.value} year` : `${props.value} years`}
		</option>
	);
};

export default OptionItemExpiration;