import IUser from "../types/interfaces/IUser";

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

export const getIdUser = (arrUsers: IUser[], idProps: number) => {
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

export const createObjectNewCard = (idCard: number, idUser: number, accountUser: string, currencyCard: string, expiredCard: number, numberCard: number, balancaCard: number, backgroundCard: string) => {
	return {
		id: idCard,
		number: numberCard,
		expired: Date.now() + expiredCard * 31622400000,
		currency: currencyCard,
		account: accountUser,
		userid: idUser,
		balance: balancaCard,
		background: backgroundCard
	};
};
