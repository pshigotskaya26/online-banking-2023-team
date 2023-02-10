import React, { ReactNode } from 'react';
import './index.css';

interface OptionItemBackgroundProps {
	value: string;
}

const OptionItemBackground: React.FC<OptionItemBackgroundProps> = (props) => {
	return (
		<option className='select-background__item' value={props.value}>{props.value}</option>
	);
};

export default OptionItemBackground;