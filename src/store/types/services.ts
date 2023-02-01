import IService from "../../types/interfaces/IService";

export interface ServicesState {
  services: IService[]
}

export enum ServicesActionTypes {
  FETCH_SERVICES = 'FETCH_SERVICES',
}

interface FetchServicesAction {
  type: ServicesActionTypes.FETCH_SERVICES,
  payload: IService[]
}


export type ServicesActions = FetchServicesAction



