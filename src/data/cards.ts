import ICard from "../types/interfaces/ICard";
import CardCurrencyEnum from "../types/enums/CardCurrencyEnum";

const cards: ICard[] = [{
  id: 1,
  userid: 1,
  account: 'BY134678484000000154501',
  currency: CardCurrencyEnum.BYN,
  expired: 1738357200000, //2025-01-01
  number: 5454123412341234
}];

export default cards;
