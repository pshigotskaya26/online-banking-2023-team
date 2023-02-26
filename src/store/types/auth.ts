import { IAdminUser, IClientUser } from '../../types/interfaces/IUser';

export interface AuthorizationState {
  user: IClientUser | IAdminUser | null;
  loadingUserInfo: boolean;
  errorLoadingUser: string;
}

export enum AuthActionTypes {
  FETCH_USERINFO = 'FETCH_USERINFO',
  FETCH_USERINFO_SUCCESS = 'FETCH_USERINFO_SUCCESS',
  FETCH_USERINFO_ERROR = 'FETCH_USERINFO_ERROR',
  LOGUOT_SYSTEM = 'LOGOUT_SYSTEM',
  ADD_FAVORITE_PAYMENT = 'ADD_FAVORITE_PAYMENT',
  REMOVE_FAVORITE_PAYMENT = 'REMOVE_FAVORITE_PAYMENT',
}

interface FetchUserInfo {
  type: AuthActionTypes.FETCH_USERINFO;
}

interface FetchUserInfoSuccess {
  type: AuthActionTypes.FETCH_USERINFO_SUCCESS;
  payload: IClientUser | IAdminUser;
}

interface FetchUserInfoError {
  type: AuthActionTypes.FETCH_USERINFO_ERROR;
  payload: string;
}

interface LoguotSystem {
  type: AuthActionTypes.LOGUOT_SYSTEM;
  payload: null;
}

interface AddFavoritePaymentAction {
  type: AuthActionTypes.ADD_FAVORITE_PAYMENT;
  payload: IClientUser | IAdminUser;
}

interface RemoveFavoritePaymentAction {
  type: AuthActionTypes.REMOVE_FAVORITE_PAYMENT;
  payload: IClientUser | IAdminUser;
}

export type AuthUserActions =
  | FetchUserInfo
  | FetchUserInfoSuccess
  | FetchUserInfoError
  | LoguotSystem
  | AddFavoritePaymentAction
  | RemoveFavoritePaymentAction;
