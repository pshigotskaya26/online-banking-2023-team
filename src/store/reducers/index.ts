import { combineReducers } from 'redux';
import { ServicesReducer } from './servicesReducer';
import { AuthReducer } from './authReducer';
import { TransfersReducer } from './transfersReducer';
import { CardsReducer } from './cardsReducer';
import { RegisterReducer } from './registerReducer';
import { CreditReducer } from './creditReducer';

export const rootReducer = combineReducers({
  services: ServicesReducer,
  authuser: AuthReducer,
  registeredUser: RegisterReducer,
  transfers: TransfersReducer,
  usercards: CardsReducer,
  usercredits: CreditReducer,
});
