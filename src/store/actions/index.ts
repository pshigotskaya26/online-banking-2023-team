import * as ServicesActionCreators from './services';
import * as AuthActions from './authorization';
import * as RegisterActions from './registration';
import * as TransfersActions from './transfers';
import * as CardManagement from './cardsManagement';
import * as CreditActions from './credits';
import * as UsersActions from './users';
import * as TransactionsActions from './transactions';
import * as CreditsAdminActions from './credits-admin';
import * as Payments from './payments';
import * as Transactions from './transactions';

const ApplicationActions = {
  ...ServicesActionCreators,
  ...AuthActions,
  ...RegisterActions,
  ...TransfersActions,
  ...CardManagement,
  ...CreditActions,
  ...UsersActions,
  ...TransactionsActions,
  ...CreditsAdminActions,
  ...Payments,
  ...Transactions,
};

export default ApplicationActions;
