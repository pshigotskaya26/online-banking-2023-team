import { TransfersActions, TransfersActionTypes, TransfersState } from '../types/transfers';
import { TransferStatus } from '../../types/enums/TransferStatus';

const initialState: TransfersState = {
  isLoadingCards: false,
  cards: [],
  isLoadingCardsError: '',

  cardTo: null,
  loadingCardTo: false,
  cardToErrorLoading: '',

  transferStatus: TransferStatus.CREATE,
  errorTransfer: '',
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

    case TransfersActionTypes.CREATE_NEW_TRANSFER: {
      return { ...state, transferStatus: TransferStatus.CREATE, errorTransfer: '' };
    }
    case TransfersActionTypes.TRANSFER_START:
      return { ...state, transferStatus: TransferStatus.LOADING };
    case TransfersActionTypes.TRANSFER_SUCCESS:
      return { ...state, transferStatus: TransferStatus.RESULT_SUCCESS };
    case TransfersActionTypes.TRANSFER_ERROR:
      return { ...state, transferStatus: TransferStatus.RESULT_ERROR, errorTransfer: action.payload };


    default:
      return state;
  }
};