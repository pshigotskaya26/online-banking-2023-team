import ICard from '../../types/interfaces/ICard';
import { TransferStatus } from '../../types/enums/TransferStatus';

export interface TransfersState {
  isLoadingCards: boolean;
  cards: ICard[];
  isLoadingCardsError: string;
  cardTo: ICard | null;
  loadingCardTo: boolean;
  cardToErrorLoading: string;
  transferStatus: TransferStatus;
  errorTransfer: string;
}

export enum TransfersActionTypes {
  FETCH_CARDS = 'FETCH_CARDS',
  FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',

  FETCH_CARD_INFO = 'FETCH_CARD_INFO',
  FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS',
  FETCH_CARD_ERROR = 'FETCH_CARD_ERROR',

  TRANSFER_START = 'TRANSFER_START',
  TRANSFER_SUCCESS = 'TRANSFER_SUCCESS',
  TRANSFER_ERROR = 'TRANSFER_ERROR',

  CREATE_NEW_TRANSFER = 'CREATE_NEW_TRANSFER'
}

interface FetchCardsAction {
  type: TransfersActionTypes.FETCH_CARDS,
}

interface FetchCardsActionSuccess {
  type: TransfersActionTypes.FETCH_CARDS_SUCCESS,
  payload: ICard[]
}

interface FetchCardsActionError {
  type: TransfersActionTypes.FETCH_CARDS_ERROR,
  payload: string
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

interface TransferStartAction {
  type: TransfersActionTypes.TRANSFER_START;
}

interface TransferActionSuccess {
  type: TransfersActionTypes.TRANSFER_SUCCESS;
}

interface TransferActionError {
  type: TransfersActionTypes.TRANSFER_ERROR,
  payload: string
}

interface CreateNewTransferAction {
  type: TransfersActionTypes.CREATE_NEW_TRANSFER,
}

export type TransfersActions = FetchCardInfoAction
  | FetchCardInfoActionSuccess
  | FetchCardInfoActionError
  | TransferStartAction
  | TransferActionSuccess
  | TransferActionError
  | FetchCardsAction
  | FetchCardsActionSuccess
  | FetchCardsActionError
  | CreateNewTransferAction