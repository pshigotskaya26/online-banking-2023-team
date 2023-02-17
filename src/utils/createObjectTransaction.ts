import { ITransaction } from '../types/interfaces/ITransaction';
import TransactionStatusEnum from '../types/enums/TransactionStatusEnum';
import TransactionsTypesEnum from '../types/enums/TransactionsTypesEnum';
import { useAppSelector } from '../hooks/useAppSelector';

export const createObjectTransaction = (
  userID: number,
  status: TransactionStatusEnum,
  cardID: number,
  value: number,
  entityType: TransactionsTypesEnum,
): ITransaction => {
  const transaction: ITransaction = {
    cardid: cardID,
    status: status,
    userid: userID,
    id: Date.now(),
    timestamp: Date.now(),
    value: value,
    entityid: 1111,
    targetid: 11111,
    entitytype: entityType,
  };
  return transaction;

};