import {
  CreditsAdminActions,
  CreditsAdminActionTypes,
  CreditsAdminState,
} from '../types/credits-admin';

const initialState: CreditsAdminState = {
  credits: [],
  errorLoadingCredits: '',
  isLoadingCredits: false,
};

export const CreditsAdminReducer = (
  state = initialState,
  action: CreditsAdminActions,
): CreditsAdminState => {
  switch (action.type) {
    case CreditsAdminActionTypes.FETCH_CREDITS:
      return { ...state, isLoadingCredits: true };
    case CreditsAdminActionTypes.FETCH_CREDITS_SUCCESS:
      return { ...state, isLoadingCredits: true };
    case CreditsAdminActionTypes.FETCH_CREDITS_ERROR:
      return { ...state };
    default:
      return state;
  }
};
