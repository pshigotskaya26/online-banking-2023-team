import {
  CreditsState,
  CreditsActionTypes,
  CreditsManagementActions,
} from '../types/credits';

const initialState: CreditsState = {
  user: null,
  credits: [],
  loadingCreditsInfo: false,
  errorLoadingCredits: '',
};

export const CreditReducer = (
  state = initialState,
  action: CreditsManagementActions,
): CreditsState => {
  switch (action.type) {
    case CreditsActionTypes.FETCH_CREDITS:
    case CreditsActionTypes.UPDATE_CREDITS:
      return { ...state, loadingCreditsInfo: true };
    case CreditsActionTypes.FETCH_CREDITS_SUCCESS:
    case CreditsActionTypes.UPDATE_CREDITS_SUCCESS:
      return { ...state, loadingCreditsInfo: false, credits: action.payload };
    case CreditsActionTypes.FETCH_CREDITS_ERROR:
    case CreditsActionTypes.UPDATE_CREDITS_ERROR:
      return {
        ...state,
        loadingCreditsInfo: false,
        errorLoadingCredits: action.payload,
      };
    default:
      return state;
  }
};
