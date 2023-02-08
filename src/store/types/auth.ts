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

export type AuthUserActions =
  | FetchUserInfo
  | FetchUserInfoSuccess
  | FetchUserInfoError;
