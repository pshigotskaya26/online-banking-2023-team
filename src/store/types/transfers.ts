import ICard from '../../types/interfaces/ICard';

export interface TransfersState {
  isLoadingCards: boolean;
  cards: ICard[];
  isLoadingCardsError: string;
  cardTo: ICard | null;
  loadingCardTo: boolean;
  cardToErrorLoading: string;
  isTransactionInProcess: boolean;
}

export enum TransfersActionTypes {
  FETCH_CARDS = 'FETCH_CARDS',
  FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',

  FETCH_CARD_INFO = 'FETCH_CARD_INFO',
  FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS',
  FETCH_CARD_ERROR = 'FETCH_CARD_ERROR',

  TRANSACTION_START = 'TRANSACTION_START',
  TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS',
  TRANSACTION_ERROR = 'TRANSACTION_ERROR',
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

interface TransactionStartAction {
  type: TransfersActionTypes.TRANSACTION_START;
}

interface TransactionActionSuccess {
  type: TransfersActionTypes.TRANSACTION_SUCCESS;
}

interface TransactionActionError {
  type: TransfersActionTypes.TRANSACTION_ERROR,
  payload: string
}

export type TransfersActions = FetchCardInfoAction
  | FetchCardInfoActionSuccess
  | FetchCardInfoActionError
  | TransactionStartAction
  | TransactionActionSuccess
  | TransactionActionError
  | FetchCardsAction
  | FetchCardsActionSuccess
  | FetchCardsActionError
