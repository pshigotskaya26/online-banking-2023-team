import { combineReducers } from 'redux';
import { ServicesReducer } from './servicesReducer';
import { AuthReducer } from './authReducer';
import { TransfersReducer } from './transfersReducer';

export const rootReducer = combineReducers({
  services: ServicesReducer,
  authuser: AuthReducer,
  transfers: TransfersReducer
});
