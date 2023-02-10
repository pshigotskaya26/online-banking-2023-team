import { Dispatch } from 'redux';
import { TransfersActions, TransfersActionTypes } from '../types/transfers';
import transfersAPI from '../../api/transfersAPI';
import { ITransactionData } from '../../types/interfaces/ITransaction';

export const getCardInfo = (number: number) => {
  return (dispatch: Dispatch<TransfersActions>) => {
    try {
      dispatch({ type: TransfersActionTypes.FETCH_CARD_INFO });
      const response = transfersAPI.fetchCardInfo(number);
      dispatch({ type: TransfersActionTypes.FETCH_CARD_SUCCESS, payload: response });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({ type: TransfersActionTypes.FETCH_CARD_ERROR, payload: e.message });
      }
    }
  };
};

export const makeATransactionByNumberCard = (transaction: ITransactionData) => {
  return (dispatch: Dispatch<TransfersActions>) => {
    try {
      dispatch({ type: TransfersActionTypes.TRANSACTION_START });
      const response = transfersAPI.makeATransactionByNumberCard(transaction);

      // const response = transfersAPI.fetchCardInfo(number);
      // dispatch({ type: TransfersActionTypes.FETCH_CARD_SUCCESS, payload: response });
    } catch (e: unknown) {
      if (e instanceof Error) {
        // dispatch({ type: TransfersActionTypes.FETCH_CARD_ERROR, payload: e.message });
      }
    }
  };
};

export const fetchCardsByUserId = (id: number) => {
  return (dispatch: Dispatch<TransfersActions>) => {
    try {
      dispatch({ type: TransfersActionTypes.FETCH_CARDS });
      const response = transfersAPI.fetchCardsByUserId(id);
      console.log(response)
      dispatch({ type: TransfersActionTypes.FETCH_CARDS_SUCCESS, payload: response });

    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({ type: TransfersActionTypes.FETCH_CARDS_ERROR, payload: e.message });
      }
    }
  };
};

