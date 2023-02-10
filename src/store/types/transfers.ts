
export interface TransfersState {

}

export enum TransfersActionTypes {
  FETCH_SERVICES = 'FETCH_SERVICES',
}

interface FetchServicesAction {
  type: TransfersActionTypes.FETCH_SERVICES,
}


export type TransfersActions = FetchServicesAction
