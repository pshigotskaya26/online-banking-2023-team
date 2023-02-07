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
}
