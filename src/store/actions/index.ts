import * as ServicesActionCreators from './services';
import * as AuthActions from './authorization';

const ApplicationActions = {
  ...ServicesActionCreators,
  ...AuthActions,
};

export default ApplicationActions;
