import { Dispatch } from 'redux';
import { AuthActionTypes, AuthUserActions } from '../types/auth';
import { AuthUserData } from '../../types/interfaces/IUser';
import authUserAPI from '../../api/userAPI';

export const fetchUserInfo = (credentials: AuthUserData) => {
  return (dispatch: Dispatch<AuthUserActions>) => {
    console.log(credentials);
    try {
      dispatch({ type: AuthActionTypes.FETCH_USERINFO });
      const response = authUserAPI.fetchUserInfo(credentials);
      console.log(response);
      dispatch({
        type: AuthActionTypes.FETCH_USERINFO_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
        dispatch({
          type: AuthActionTypes.FETCH_USERINFO_ERROR,
          payload: e.message,
        });
      }
    }
  };
};
