import IService from "../../types/interfaces/IService";
import {ModesServicesPage} from "../../types/enums/ModesServicesPage";

export interface ServicesState {
  loadingServices: boolean,
  services: IService[],
  errorLoadingServices: string,
  errorAddNewService: string,
  mode: ModesServicesPage,
  loadingCreateService: boolean,
  activeService: IService | undefined
}

export enum ServicesActionTypes {
  FETCH_SERVICES = 'FETCH_SERVICES',
  FETCH_SERVICES_SUCCESS = 'FETCH_SERVICES_SUCCESS',
  FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR',
  ADD_NEW_SERVICE = 'ADD_NEW_SERVICE',
  ADD_NEW_SERVICE_SUCCESS = 'ADD_NEW_SERVICE_SUCCESS',
  ADD_NEW_SERVICE_ERROR = 'ADD_NEW_SERVICE_ERROR',
  DELETE_SERVICE = "DELETE_SERVICE",
  UPDATE_SERVICE = "UPDATE_SERVICE",
  HANDLE_AVAILABILITY_SERVICE = "HANDLE_AVAILABILITY_SERVICE",
  SET_ACTIVE_SERVICE = "SET_ACTIVE_SERVICE",
  SET_MODE_SERVICE_PAGE = "SET_MODE_SERVICE_PAGE"
}

interface FetchServicesAction {
  type: ServicesActionTypes.FETCH_SERVICES,
}

interface FetchServicesActionSuccess {
  type: ServicesActionTypes.FETCH_SERVICES_SUCCESS,
  payload: IService[]
}

interface FetchServicesActionError {
  type: ServicesActionTypes.FETCH_SERVICES_ERROR,
  payload: string
}

interface AddNewServiceAction {
  type: ServicesActionTypes.ADD_NEW_SERVICE,
}

interface AddNewServiceSuccessAction {
  type: ServicesActionTypes.ADD_NEW_SERVICE_SUCCESS,
  payload: IService
}


interface AddNewServiceErrorAction {
  type: ServicesActionTypes.ADD_NEW_SERVICE_ERROR,
  payload: string
}

interface DeleteServiceAction {
  type: ServicesActionTypes.DELETE_SERVICE,
  payload: number
}

interface UpdateServiceAction {
  type: ServicesActionTypes.UPDATE_SERVICE,
  payload: IService
}

interface HandleAvailabilityService {
  type: ServicesActionTypes.HANDLE_AVAILABILITY_SERVICE,
  payload: number
}

interface SetActiveIdService {
  type: ServicesActionTypes.SET_ACTIVE_SERVICE,
  payload: IService | undefined
}

interface SetModeServicePageAction {
  type: ServicesActionTypes.SET_MODE_SERVICE_PAGE,
  payload: ModesServicesPage
}

export type ServicesActions = FetchServicesAction
  | FetchServicesActionSuccess
  | FetchServicesActionError
  | AddNewServiceAction
  | AddNewServiceSuccessAction
  | AddNewServiceErrorAction
  | DeleteServiceAction
  | UpdateServiceAction
  | HandleAvailabilityService
  | SetActiveIdService
  | SetModeServicePageAction