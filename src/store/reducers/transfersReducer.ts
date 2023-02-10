import { TransfersActions, TransfersActionTypes, TransfersState } from '../types/transfers';

const initialState: TransfersState = {
  isLoadingCards: false,
  cards: [],
  isLoadingCardsError: '',
  cardTo: null,
  loadingCardTo: false,
  cardToErrorLoading: '',
  isTransactionInProcess: false,

};

export const TransfersReducer = (state = initialState, action: TransfersActions): TransfersState => {
  switch (action.type) {
    case TransfersActionTypes.FETCH_CARDS:
      return { ...state, isLoadingCards: true, isLoadingCardsError: '' };
    case TransfersActionTypes.FETCH_CARDS_SUCCESS:
      return { ...state, cards: action.payload, isLoadingCards: false };
    case TransfersActionTypes.FETCH_CARDS_ERROR:
      return { ...state, cards: [], isLoadingCards: false, isLoadingCardsError: action.payload };
    case TransfersActionTypes.FETCH_CARD_INFO:
      return { ...state, loadingCardTo: true, cardToErrorLoading: '' };
    case TransfersActionTypes.FETCH_CARD_SUCCESS:
      return { ...state, loadingCardTo: false, cardTo: action.payload };
    case TransfersActionTypes.FETCH_CARD_ERROR:
      return { ...state, loadingCardTo: false, cardTo: null, cardToErrorLoading: action.payload };
    default:
      return state;
  }
};