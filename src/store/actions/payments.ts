import { Dispatch } from 'redux';
import { ITransaction } from '../../types/interfaces/ITransaction';
import { PaymentsActions, PaymentsActionTypes } from '../types/payments';
import paymentsAPI from '../../api/paymentsAPI';

export const createPayment = (transaction: ITransaction) => {
  return (dispatch: Dispatch<PaymentsActions>) => {
    try {
      dispatch({ type: PaymentsActionTypes.CREATE_PAYMENT });
      const result = paymentsAPI.createPayment(transaction);
      dispatch({
        type: PaymentsActionTypes.CREATE_PAYMENT_SUCCESS,
        payload: result,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: PaymentsActionTypes.CREATE_PAYMENT_ERROR,
          payload: e.message,
        });
      }
    }
  };
};
