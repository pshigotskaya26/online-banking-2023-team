import TransactionsTypesEnum from '../enums/TransactionsTypesEnum';
import TransactionStatusEnum from '../enums/TransactionStatusEnum';
import CardCurrencyEnum from '../enums/CardCurrencyEnum';

export interface ITransaction {
  id: number;
  userid: number;
  cardid: number;
  timestamp: number; //время платежа
  value: number; //сумма платежа
  cardNumber: number;
  entitytype: TransactionsTypesEnum;
  cardCurrency: CardCurrencyEnum;
  status: TransactionStatusEnum;
}

export interface ITransferData {
  cardFrom: number;
  cardTo: number;
  amountFrom: number;
  amountTo?: number;
}
