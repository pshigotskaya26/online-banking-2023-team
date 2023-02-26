import {
  CreditsAdminActions,
  CreditsAdminActionTypes,
  CreditsAdminState,
} from '../types/credits-admin';

const initialState: CreditsAdminState = {
  credits: [],
  errorLoadingCredits: '',
  isLoadingCredits: false,
  paymentsByDays: [],
  creditsByDays: [],
  creditInfo: null,
};

export const CreditsAdminReducer = (
  state = initialState,
  action: CreditsAdminActions,
): CreditsAdminState => {
  switch (action.type) {
    case CreditsAdminActionTypes.FETCH_CREDITS:
      return { ...state, isLoadingCredits: true };
    case CreditsAdminActionTypes.FETCH_CREDITS_SUCCESS:
      return { ...state, isLoadingCredits: false, credits: action.payload };
    case CreditsAdminActionTypes.FETCH_CREDITS_ERROR:
      return {
        ...state,
        isLoadingCredits: false,
        errorLoadingCredits: action.payload,
      };
    case CreditsAdminActionTypes.FETCH_PAYMENTS_BY_DAYS:
      return {
        ...state,
        paymentsByDays: action.payload,
      };
    case CreditsAdminActionTypes.FETCH_CREDITS_BY_DAYS:
      return {
        ...state,
        creditsByDays: action.payload,
      };

    case CreditsAdminActionTypes.FETCH_CREDIT_INFO_BY_ID:
      return {
        ...state,
        creditInfo: action.payload,
      };
    default:
      return state;
  }
};
