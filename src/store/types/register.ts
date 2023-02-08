import { IAdminUser, IClientUser } from '../../types/interfaces/IUser';

export interface RegisterState {
  user: IClientUser | IAdminUser | null;
  loadingUserInfo: boolean;
  errorLoadingUser: string;
}

export enum RegisterActionTypes {
  CREATE_USERINFO = 'CREATE_USERINFO',
  CREATE_USERINFO_SUCCESS = 'CREATE_USERINFO_SUCCESS',
  CREATE_USERINFO_ERROR = 'CREATE_USERINFO_ERROR',
}

interface CreateUserInfo {
  type: RegisterActionTypes.CREATE_USERINFO;
}

interface CreateUserInfoSuccess {
  type: RegisterActionTypes.CREATE_USERINFO_SUCCESS;
  payload: IClientUser | IAdminUser;
}

interface CreateUserInfoError {
  type: RegisterActionTypes.CREATE_USERINFO_ERROR;
  payload: string;
}

export type RegisterUserActions =
  | CreateUserInfo
  | CreateUserInfoSuccess
  | CreateUserInfoError;
