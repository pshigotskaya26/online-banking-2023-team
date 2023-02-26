import { Dispatch } from 'redux';
import {
  TransactionsActions,
  TransactionsActionTypes,
} from '../types/transactions';
import transactionsAPI from '../../api/transactionsAPI';

export const fetchTransactions = (id: number) => {
  return (dispatch: Dispatch<TransactionsActions>) => {
    try {
      dispatch({ type: TransactionsActionTypes.FETCH_TRANSACTIONS });
      const response = transactionsAPI.fetchTransactions(id);
      dispatch({
        type: TransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: TransactionsActionTypes.FETCH_TRANSACTIONS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};
