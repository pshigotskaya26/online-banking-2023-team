import ICard from "../types/interfaces/ICard";
import CardCurrencyEnum from "../types/enums/CardCurrencyEnum";
import CardBackgroundEnum from "../types/enums/CardBackgroundEnum";

const cardsData: ICard[] = [{
	id: 1,
	userid: 1,
	account: 'BY134678484000000154501',
	currency: CardCurrencyEnum.BYN,
	expired: 1738357200000, //2025-01-01
	number: 5454123412341234,
	balance: 0,
	background: CardBackgroundEnum.blue,
	isShown: true
},
{
	id: 2,
	userid: 1,
	account: 'BY134678484000000154501',
	currency: CardCurrencyEnum.BYN,
	expired: 1738357200000, //2025-01-01
	number: 5454123412341234,
	balance: 0,
	background: CardBackgroundEnum.green,
	isShown: true
}];

export default cardsData;
