import { IAdminUser, IClientUser } from '../../types/interfaces/IUser';

export interface UsersState {
  users: (IClientUser | IAdminUser)[];
  isLoadingUsers: boolean;
  errorLoadingUsers: string;
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
  SET_IS_DISABLED_OPERATIONS = 'SET_IS_DISABLED_OPERATIONS',
}

interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS,
}

interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS,
  payload: IClientUser[]
}

interface FetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR,
  payload: string
}

interface SetIsDisabledOperationsAction {
  type: UsersActionTypes.SET_IS_DISABLED_OPERATIONS,
  payload: number
}

export type UsersActions =
  FetchUsersAction |
  FetchUsersSuccessAction |
  FetchUsersErrorAction |
  SetIsDisabledOperationsAction


