import { ITransaction } from '../../types/interfaces/ITransaction';

export interface TransactionsState {
  transactions: ITransaction[];
  isLoadingTransactions: boolean,
  errorLoadingTransactions: string
}

export enum TransactionsActionTypes {
  FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS',
  FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS',
  FETCH_TRANSACTIONS_ERROR = 'FETCH_TRANSACTIONS_ERROR',
}

interface FetchTransactionsAction {
  type: TransactionsActionTypes.FETCH_TRANSACTIONS,
}

interface FetchTransactionsActionSuccess {
  type: TransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS,
  payload: ITransaction[]
}

interface FetchTransactionsActionError {
  type: TransactionsActionTypes.FETCH_TRANSACTIONS_ERROR,
  payload: string
}


export type TransactionsActions =
  FetchTransactionsAction
  | FetchTransactionsActionSuccess
  | FetchTransactionsActionError
