import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { changeIconEyeInCard } from "../../utils/formateCardData";

interface CardIconEyeProps {
	isShownData: boolean;
}

const CardIconEye: React.FC<CardIconEyeProps> = (props) => {
	const iconEye = changeIconEyeInCard(props.isShownData);

	return (
		<FontAwesomeIcon icon={iconEye} size={"1x"} className={"text-white-600"} />
	);
};

export default CardIconEye;