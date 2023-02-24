import { combineReducers } from 'redux';
import { ServicesReducer } from './servicesReducer';
import { AuthReducer } from './authReducer';
import { TransfersReducer } from './transfersReducer';
import { CardsReducer } from './cardsReducer';
import { RegisterReducer } from './registerReducer';
import { UsersReducer } from './usersReducer';
import { TransactionsReducer } from './transactionsReducer';
import { CreditsAdminReducer } from './creditsAdminReducer';

export const rootReducer = combineReducers({
  services: ServicesReducer,
  authuser: AuthReducer,
  registeredUser: RegisterReducer,
  transfers: TransfersReducer,
  usercards: CardsReducer,
  users: UsersReducer,
  transactions: TransactionsReducer,
  creditsAdmin: CreditsAdminReducer,
});
