import { ServicesActions, ServicesActionTypes, ServicesState } from '../types/services';
import { ModesServicesPage } from '../../types/enums/ModesServicesPage';
import { TransfersState } from '../types/transfers';

const initialState: TransfersState = {};

export const ServicesReducer = (state = initialState, action: ServicesActions): TransfersState => {
  switch (action.type) {
    case ServicesActionTypes.FETCH_SERVICES:
      return { ...state, loadingServices: true };
    default:
      return state;
  }
};