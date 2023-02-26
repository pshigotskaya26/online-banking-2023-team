import {
  AuthActionTypes,
  AuthorizationState,
  AuthUserActions,
} from '../types/auth';

const initialState: AuthorizationState = {
  user: null,
  errorLoadingUser: '',
  loadingUserInfo: false,
};

export const AuthReducer = (
  state = initialState,
  action: AuthUserActions,
): AuthorizationState => {
  switch (action.type) {
    case AuthActionTypes.FETCH_USERINFO:
      return { ...state, loadingUserInfo: true };
    case AuthActionTypes.FETCH_USERINFO_SUCCESS:
    case AuthActionTypes.LOGUOT_SYSTEM:
      return { ...state, loadingUserInfo: false, user: action.payload };
    case AuthActionTypes.FETCH_USERINFO_ERROR:
      return {
        ...state,
        loadingUserInfo: false,
        errorLoadingUser: action.payload,
      };
    case AuthActionTypes.ADD_FAVORITE_PAYMENT:
      return { ...state, loadingUserInfo: false, user: action.payload };
    case AuthActionTypes.REMOVE_FAVORITE_PAYMENT:
      return { ...state, loadingUserInfo: false, user: action.payload };
    default:
      return state;
  }
};
