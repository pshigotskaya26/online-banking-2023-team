import {
  CardsActionTypes,
  CardsManagementActions,
  CardsState,
} from '../types/cards';

const initialState: CardsState = {
  user: null,
  cards: [],
  loadingCardsInfo: false,
  errorLoadingCards: '',
  loadingReplenish: false,
};

export const CardsReducer = (
  state = initialState,
  action: CardsManagementActions,
): CardsState => {
  switch (action.type) {
    case CardsActionTypes.FETCH_CARDS:
    case CardsActionTypes.UPDATE_CARDS:
      return { ...state, loadingCardsInfo: true };
    case CardsActionTypes.FETCH_CARDS_SUCCESS:
    case CardsActionTypes.UPDATE_CARDS_SUCCESS:
      return { ...state, loadingCardsInfo: false, cards: action.payload };
    case CardsActionTypes.FETCH_CARDS_ERROR:
    case CardsActionTypes.UPDATE_CARDS_ERROR:
      return {
        ...state,
        loadingCardsInfo: false,
        errorLoadingCards: action.payload,
      };

    case CardsActionTypes.UPDATE_CARDS_WITH_SALARY_SUCCESS:
      return {
        ...state,
        loadingCardsInfo: false,
        cards: action.payload,
      };

    case CardsActionTypes.REPLENISH_BALANCE:
      return { ...state, loadingReplenish: true };

    case CardsActionTypes.REPLENISH_BALANCE_SUCCESS:
      return { ...state, cards: action.payload, loadingReplenish: false };

    case CardsActionTypes.REPLENISH_BALANCE_ERROR:
      return { ...state, loadingReplenish: false };

    default:
      return state;
  }
};
