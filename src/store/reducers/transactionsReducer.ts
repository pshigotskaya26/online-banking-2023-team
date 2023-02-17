import { TransactionsActions, TransactionsActionTypes, TransactionsState } from '../types/transactions';

const initialState: TransactionsState = {
  transactions: [],
  isLoadingTransactions: false,
  errorLoadingTransactions: '',
};

export const TransactionsReducer = (state = initialState, action: TransactionsActions): TransactionsState => {
  switch (action.type) {
    case TransactionsActionTypes.FETCH_TRANSACTIONS:
      return { ...state, isLoadingTransactions: true };
    case TransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS:
      return { ...state, transactions: action.payload, isLoadingTransactions: false };
    case TransactionsActionTypes.FETCH_TRANSACTIONS_ERROR:
      return { ...state, errorLoadingTransactions: action.payload, isLoadingTransactions: false };
    default:
      return state;
  }
};