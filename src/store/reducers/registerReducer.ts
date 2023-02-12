import {
  RegisterActionTypes,
  RegisterUserActions,
  RegisterState,
} from '../types/register';

const initialState: RegisterState = {
  user: null,
  errorLoadingUser: '',
  loadingUserInfo: false,
};

export const RegisterReducer = (
  state = initialState,
  action: RegisterUserActions,
): RegisterState => {
  switch (action.type) {
    case RegisterActionTypes.CREATE_USERINFO:
      return { ...state, loadingUserInfo: true };
    case RegisterActionTypes.CREATE_USERINFO_SUCCESS:
      return { ...state, loadingUserInfo: false, user: action.payload };
    case RegisterActionTypes.CREATE_USERINFO_ERROR:
      return {
        ...state,
        loadingUserInfo: false,
        errorLoadingUser: action.payload,
      };
    default:
      return state;
  }
};
