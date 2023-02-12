import { Dispatch } from 'redux';
import { TransfersActions, TransfersActionTypes } from '../types/transfers';
import transfersAPI from '../../api/transfersAPI';
import { ITransferData } from '../../types/interfaces/ITransaction';

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

export const makeATransferByNumberCard = (transaction: ITransferData) => {
  return async (dispatch: Dispatch<TransfersActions>) => {
    try {
      dispatch({ type: TransfersActionTypes.TRANSFER_START });
      await transfersAPI.makeATransferByNumberCard(transaction);
      dispatch({ type: TransfersActionTypes.TRANSFER_SUCCESS });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({ type: TransfersActionTypes.TRANSFER_ERROR, payload: e.message });
      }
    }
  };
};

export const fetchCardsByUserId = (id: number) => {
  return (dispatch: Dispatch<TransfersActions>) => {
    try {
      dispatch({ type: TransfersActionTypes.FETCH_CARDS });
      const response = transfersAPI.fetchCardsByUserId(id);
      dispatch({ type: TransfersActionTypes.FETCH_CARDS_SUCCESS, payload: response });

    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({ type: TransfersActionTypes.FETCH_CARDS_ERROR, payload: e.message });
      }
    }
  };
};

export const createNewTransfer = () => {
  return (dispatch: Dispatch<TransfersActions>) => {
    dispatch({ type: TransfersActionTypes.CREATE_NEW_TRANSFER });
  };
};