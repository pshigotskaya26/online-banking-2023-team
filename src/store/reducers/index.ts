import { combineReducers } from 'redux';
import { ServicesReducer } from './servicesReducer';
import { AuthReducer } from './authReducer';
import { TransfersReducer } from './transfersReducer';
import { CardsReducer } from './cardsReducer';
import { RegisterReducer } from './registerReducer';
import { CreditReducer } from './creditReducer';
import { UsersReducer } from './usersReducer';
import { TransactionsReducer } from './transactionsReducer';
import { CreditsAdminReducer } from './creditsAdminReducer';
import { PaymentsReducer } from './paymentsReducer';

export const rootReducer = combineReducers({
  services: ServicesReducer,
  authuser: AuthReducer,
  registeredUser: RegisterReducer,
  transfers: TransfersReducer,
  usercards: CardsReducer,
  users: UsersReducer,
  usercredits: CreditReducer,
  creditsAdmin: CreditsAdminReducer,
  payments: PaymentsReducer,
  transactions: TransactionsReducer,
});
