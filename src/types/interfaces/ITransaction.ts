import TransactionsTypesEnum from '../enums/TransactionsTypesEnum';
import TransactionStatusEnum from '../enums/TransactionStatusEnum';

export interface ITransaction {
  id: number;
  userid: number;
  cardid: number;
  timestamp: number; //время платежа
  value: number; //сумма платежа
  entityid: number;
  entitytype: TransactionsTypesEnum;
  targetid: number;
  status: TransactionStatusEnum;
}

export interface ITransactionData {
  cardFrom: number,
  cardTo: number,
  amount: number
}