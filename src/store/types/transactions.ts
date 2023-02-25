import { ITransaction } from '../../types/interfaces/ITransaction';

export interface TransactionsState {
  transactions: ITransaction[];
  loadingTransactions: boolean;
  errorLoadingTransactions: string;
}

export enum TransactionsActionTypes {
  FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS',
  FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS',
  FETCH_TRANSACTIONS_ERROR = 'FETCH_TRANSACTIONS_ERROR',
}

interface FetchTransactions {
  type: TransactionsActionTypes.FETCH_TRANSACTIONS;
}

interface FetchTransactionsSuccess {
  type: TransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS;
  payload: ITransaction[];
}

interface FetchTransactionsError {
  type: TransactionsActionTypes.FETCH_TRANSACTIONS_ERROR;
  payload: string;
}

export type TransactionsActions =
  | FetchTransactions
  | FetchTransactionsSuccess
  | FetchTransactionsError;
