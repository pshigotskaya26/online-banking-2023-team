import { combineReducers } from 'redux';
import { ServicesReducer } from './servicesReducer';
import { AuthReducer } from './authReducer';
import { TransfersReducer } from './transfersReducer';
import { CardsReducer } from './cardsReducer';

export const rootReducer = combineReducers({
  services: ServicesReducer,
  authuser: AuthReducer,
  transfers: TransfersReducer
  usercards: CardsReducer,
});
