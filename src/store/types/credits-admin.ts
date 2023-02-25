import { ILineGraphicData } from '../../types/interfaces/ILineGraphicData';
import ICredit from '../../types/interfaces/ICredit';

export interface CreditsAdminState {
  credits: ICredit[];
  isLoadingCredits: boolean;
  errorLoadingCredits: string;
  paymentsByDays: ILineGraphicData[];
  creditsByDays: ILineGraphicData[];
}

export enum CreditsAdminActionTypes {
  FETCH_CREDITS = 'FETCH_CREDITS',
  FETCH_CREDITS_SUCCESS = 'FETCH_CREDITS_SUCCESS',
  FETCH_CREDITS_ERROR = 'FETCH_CREDITS_ERROR',
  FETCH_PAYMENTS_BY_DAYS = 'FETCH_PAYMENTS_BY_DAYS',
  FETCH_CREDITS_BY_DAYS = 'FETCH_CREDITS_BY_DAYS',
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
  payload: string;
}

interface FetchPaymentsByDaysAction {
  type: CreditsAdminActionTypes.FETCH_PAYMENTS_BY_DAYS;
  payload: ILineGraphicData[];
}

interface FetchCreditsByDaysAction {
  type: CreditsAdminActionTypes.FETCH_CREDITS_BY_DAYS;
  payload: ILineGraphicData[];
}

export type CreditsAdminActions =
  | FetchCreditsAdminSuccessAction
  | FetchCreditsAdminAction
  | FetchCreditsAdminErrorAction
  | FetchPaymentsByDaysAction
  | FetchCreditsByDaysAction;
