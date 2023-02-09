import imgBlue from "../assets/cardBackground/card-bg-blue.png";
import imgGreen from "../assets/cardBackground/card-bg-green.png";
import imgOrange from "../assets/cardBackground/card-bg-orange.png";
import imgViolett from "../assets/cardBackground/card-bg-violett.png";
import imgRed from "../assets/cardBackground/card-bg-red.png";
import CardBackgroundEnum from "../types/enums/CardBackgroundEnum";

export const getBackgroundImageByColor = (cardBackground: string) => {
	let iamgBackground;

	switch(cardBackground) {
		case `${CardBackgroundEnum.blue}`:
			iamgBackground = imgBlue;
			break;

		case `${CardBackgroundEnum.green}`:
			iamgBackground = imgGreen;
			break;
		
		case `${CardBackgroundEnum.orange}`:
			iamgBackground = imgOrange;
			break;

		case `${CardBackgroundEnum.violett}`:
			iamgBackground = imgViolett;
			break;

		case `${CardBackgroundEnum.red}`:
			iamgBackground = imgRed;
			break;
	}

	return iamgBackground;
};