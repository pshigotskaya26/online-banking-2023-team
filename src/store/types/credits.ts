import ICredit from '../../types/interfaces/ICredit';
import { IAdminUser, IClientUser } from '../../types/interfaces/IUser';

export interface CreditsState {
  user: IClientUser | IAdminUser | null;
  credits: ICredit[];
  loadingCreditsInfo: boolean;
  errorLoadingCredits: string;
}

export enum CreditsActionTypes {
  FETCH_CREDITS = 'FETCH_CREDITS',
  FETCH_CREDITS_SUCCESS = 'FETCH_CREDITS_SUCCESS',
  FETCH_CREDITS_ERROR = 'FETCH_CREDITS_ERROR',
  UPDATE_CREDITS = 'UPDATE_CREDITS',
  UPDATE_CREDITS_SUCCESS = 'UPDATE_CREDITS_SUCCESS',
  UPDATE_CREDITS_ERROR = 'UPDATE_CREDITS_ERROR',
}

interface FetchCredits {
  type: CreditsActionTypes.FETCH_CREDITS;
}

interface FetchCreditsSuccess {
  type: CreditsActionTypes.FETCH_CREDITS_SUCCESS;
  payload: ICredit[];
}

interface FetchCreditsError {
  type: CreditsActionTypes.FETCH_CREDITS_ERROR;
  payload: string;
}

interface UpdateUserCredits {
  type: CreditsActionTypes.UPDATE_CREDITS;
}
interface UpdateUserCreditsSuccess {
  type: CreditsActionTypes.UPDATE_CREDITS_SUCCESS;
  payload: ICredit[];
}
interface UpdateUserCreditsError {
  type: CreditsActionTypes.UPDATE_CREDITS_ERROR;
  payload: string;
}

export type CreditsManagementActions =
  | FetchCredits
  | FetchCreditsSuccess
  | FetchCreditsError
  | UpdateUserCredits
  | UpdateUserCreditsSuccess
  | UpdateUserCreditsError;
