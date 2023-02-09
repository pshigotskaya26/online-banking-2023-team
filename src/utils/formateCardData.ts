import IUser from "../types/interfaces/IUser";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const getStringCardNumber = (cardNumber: number) => {
	let resultStringCardNumber = '';
	let arrStringCardNumber = cardNumber.toString().split('');

	for (let i = 0; i < arrStringCardNumber.length; i++) {
		if (i === 3 || i === 7 || i === 11) {
			resultStringCardNumber += arrStringCardNumber[i] + ' ';
		}
		else {
			resultStringCardNumber += arrStringCardNumber[i];
		}
	}

	return resultStringCardNumber;
};

export const getStringCardBalance = (cardBalance: number) => {
	return cardBalance.toString();
};

export const getCardUserById = (arrUsers: IUser[], idProps: number) => {
	return arrUsers.filter((user: IUser) => user.id === idProps)[0];
};

export const generateCardNumber = () => {
	let startStr = '';

	for (let i = 0; i < 16; i++) {
		let randomNumber = Math.floor(Math.random() * 10);
		startStr += randomNumber;
	}

	return Number(startStr);
};

export const changeIconEyeInCard = (isShownValue: boolean) => {
	let iconEye = (isShownValue) ? faEye : faEyeSlash;
	return iconEye;
}

export const changeNumberToStar = (stringNumber: string) => {
	return `**** **** **** ${stringNumber.slice(-4)}`;
};

export const changeBalanceToStar = (stringNumber: string) => {
	return '*'.repeat(stringNumber.length)
};

export const changeCardNumber = (isShownValue: boolean, stringNumber: string) => {

	if (isShownValue) {
		return stringNumber;
	}
	else {
		return changeNumberToStar(stringNumber);
	}
}

export const changeCardBalance = (isShownValue: boolean, stringNumber: string) => {
	if (isShownValue) {
		return stringNumber;
	}
	else {
		return changeBalanceToStar(stringNumber);
	}
};
