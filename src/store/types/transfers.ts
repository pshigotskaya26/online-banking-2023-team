import ICard from '../../types/interfaces/ICard';

export interface TransfersState {
  cardTo: ICard | null;
  loadingCardTo: boolean;
  cardToErrorLoading: string;
  isTransactionInProcess: boolean
}

export enum TransfersActionTypes {
  FETCH_CARD_INFO = 'FETCH_CARD_INFO',
  FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS',
  FETCH_CARD_ERROR = 'FETCH_CARD_ERROR'
}

interface FetchCardInfoAction {
  type: TransfersActionTypes.FETCH_CARD_INFO,
}

interface FetchCardInfoActionSuccess {
  type: TransfersActionTypes.FETCH_CARD_SUCCESS,
  payload: ICard
}

interface FetchCardInfoActionError {
  type: TransfersActionTypes.FETCH_CARD_ERROR,
  payload: string
}

export type TransfersActions = FetchCardInfoAction
  | FetchCardInfoActionSuccess
  | FetchCardInfoActionError
