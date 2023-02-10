import { TransfersActions, TransfersActionTypes, TransfersState } from '../types/transfers';

const initialState: TransfersState = {
  cardTo: null,
  loadingCardTo: false,
  cardToErrorLoading: '',

  isTransactionInProcess: false,

};

export const TransfersReducer = (state = initialState, action: TransfersActions): TransfersState => {
  switch (action.type) {
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