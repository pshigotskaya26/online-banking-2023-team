import { combineReducers } from 'redux';
import { ServicesReducer } from './servicesReducer';
import { AuthReducer } from './authReducer';

export const rootReducer = combineReducers({
  services: ServicesReducer,
  authuser: AuthReducer,
});
