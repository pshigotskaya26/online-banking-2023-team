import IService from '../../types/interfaces/IService';
import { IAdminUser, IClientUser } from '../../types/interfaces/IUser';

export interface ServicesState {
  loadingServices: boolean;
  services: IService[];
  errorLoadingServices: string;
}

export enum ServicesActionTypes {
  FETCH_SERVICES = 'FETCH_SERVICES',
  FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS',
  FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR',
}

interface FetchServicesAction {
  type: ServicesActionTypes.FETCH_SERVICES;
}

interface FetchServicesActionSuccess {
  type: ServicesActionTypes.FETCH_SERVICES_SUCCESS;
  payload: IService[];
}

interface FetchServicesActionError {
  type: ServicesActionTypes.FETCH_SERVICES_ERROR;
  payload: string;
}

export type ServicesActions =
  | FetchServicesAction
  | FetchServicesActionSuccess
  | FetchServicesActionError;
