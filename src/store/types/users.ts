import { IClientUser } from '../../types/interfaces/IUser';

export interface UsersState {
  users: IClientUser[];
  isLoadingUsers: boolean;
  errorLoadingUsers: string;
}

export enum UsersActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
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


export type UsersActions =
  FetchUsersAction |
  FetchUsersSuccessAction |
  FetchUsersErrorAction


