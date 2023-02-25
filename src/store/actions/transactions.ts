import { Dispatch } from 'redux';
import {
  TransactionsActions,
  TransactionsActionTypes,
} from '../types/transactions';
import transactionsAPI from '../../api/transactionsAPI';

export const getTransactionsByUserId = (userid: number) => {
  return (dispatch: Dispatch<TransactionsActions>) => {
    try {
      dispatch({ type: TransactionsActionTypes.FETCH_TRANSACTIONS });
      const result = transactionsAPI.getTransactionsByUserId(userid);
      dispatch({
        type: TransactionsActionTypes.FETCH_TRANSACTIONS_SUCCESS,
        payload: result,
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
