import * as ServicesActionCreators from './services';
import * as AuthActions from './authorization';
import * as RegisterActions from './registration';
import * as TransfersActions from './transfers';

const ApplicationActions = {
  ...ServicesActionCreators,
  ...AuthActions,
  ...RegisterActions,
  ...TransfersActions
};

export default ApplicationActions;
