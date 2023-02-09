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

export const createObjectNewCard = (idCard: number, idUser: number, accountUser: string, currencyCard: string, expiredCard: number, numberCard: number, balancaCard: number, backgroundCard: string, isShownValue: boolean) => {
	return {
		id: idCard,
		number: numberCard,
		expired: Date.now() + expiredCard * 31622400000,
		currency: currencyCard,
		account: accountUser,
		userid: idUser,
		balance: balancaCard,
		background: backgroundCard,
		isShown: isShownValue
	};
};

export const changeIconEyeInCard = (isShownValue: boolean) => {
	let iconEye = (isShownValue) ? faEye : faEyeSlash;
	return iconEye;
}

export const changeNumberToStar = (stringNumber: string) => {
	let resultStr = '';

	for (let i = 0; i < stringNumber.length - 5; i++) {
		if (stringNumber[i] !== ' ') {
			resultStr += '*';
		}
		else {
			resultStr += stringNumber[i];
		}
	}
	return resultStr + stringNumber.slice(-5);
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
