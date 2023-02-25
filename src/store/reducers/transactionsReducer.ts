import {
  TransactionsActions,
  TransactionsActionTypes,
  TransactionsState,
} from '../types/transactions';

const initialState: TransactionsState = {
  transactions: [],
  loadingTransactions: false,
  errorLoadingTransactions: '',
};

export const TransactionsReducer = (
  state = initialState,
  action: TransactionsActions,
): TransactionsState => {
  switch (action.type) {
    case TransactionsActionTypes.FETCH_TRANSACTIONS:
      return { ...state, loadingTransactions: true };
    case TransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loadingTransactions: false,
        transactions: action.payload,
      };
    case TransactionsActionTypes.FETCH_TRANSACTIONS_ERROR:
      return {
        ...state,
        loadingTransactions: false,
        errorLoadingTransactions: action.payload,
      };
    default:
      return state;
  }
};
