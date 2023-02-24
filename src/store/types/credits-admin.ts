export interface CreditsAdminState {
  credits: any[];
  isLoadingCredits: boolean;
  errorLoadingCredits: string;
}

export enum CreditsAdminActionTypes {
  FETCH_CREDITS = 'FETCH_CREDITS',
  FETCH_CREDITS_SUCCESS = 'FETCH_CREDITS_SUCCESS',
  FETCH_CREDITS_ERROR = 'FETCH_CREDITS_ERROR',
}

interface FetchCreditsAdminAction {
  type: CreditsAdminActionTypes.FETCH_CREDITS;
}

interface FetchCreditsAdminSuccessAction {
  type: CreditsAdminActionTypes.FETCH_CREDITS_SUCCESS;
  payload: any[];
}

interface FetchCreditsAdminErrorAction {
  type: CreditsAdminActionTypes.FETCH_CREDITS_ERROR;
}

export type CreditsAdminActions =
  | FetchCreditsAdminSuccessAction
  | FetchCreditsAdminAction
  | FetchCreditsAdminErrorAction;
