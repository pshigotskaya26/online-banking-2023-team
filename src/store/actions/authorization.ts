import { Dispatch } from 'redux';
import { AuthActionTypes, AuthUserActions } from '../types/auth';
import { AuthUserData } from '../../types/interfaces/IUser';
import authUserAPI from '../../api/userAPI';

export const fetchUserInfo = (credentials: AuthUserData) => {
  return (dispatch: Dispatch<AuthUserActions>) => {
    try {
      dispatch({ type: AuthActionTypes.FETCH_USERINFO });
      const response = authUserAPI.fetchUserInfo(credentials);
      dispatch({
        type: AuthActionTypes.FETCH_USERINFO_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: AuthActionTypes.FETCH_USERINFO_ERROR,
          payload: e.message,
        });
      }
    }
  };
};

export const fetchUserInfoByID = (id: number) => {
  return (dispatch: Dispatch<AuthUserActions>) => {
    try {
      dispatch({ type: AuthActionTypes.FETCH_USERINFO });
      const response = authUserAPI.fetchUserInfoByID(id);
      dispatch({
        type: AuthActionTypes.FETCH_USERINFO_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: AuthActionTypes.FETCH_USERINFO_ERROR,
          payload: e.message,
        });
      }
    }
  };
};

export const logoutSystem = () => {
  return (dispatch: Dispatch<AuthUserActions>) => {
    try {
      dispatch({ type: AuthActionTypes.FETCH_USERINFO });
      const response = authUserAPI.logoutSystem();
      dispatch({
        type: AuthActionTypes.LOGUOT_SYSTEM,
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
