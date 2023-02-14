import { Dispatch } from 'redux';
import { UsersActions, UsersActionTypes } from '../types/users';
import usersAPI from '../../api/usersAPI';


export const fetchUsers = () => {
  return (dispatch: Dispatch<UsersActions>) => {
    try {
      dispatch({ type: UsersActionTypes.FETCH_USERS });
      const response = usersAPI.fetchUsers();
      dispatch({ type: UsersActionTypes.FETCH_USERS_SUCCESS, payload: response });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({ type: UsersActionTypes.FETCH_USERS_ERROR, payload: e.message });
      }
    }
  };
};

export const handleDisableOperationUser = (id: number) => {
  return (dispatch: Dispatch<UsersActions>) => {
    try {
      usersAPI.handleDisableOperationUser(id);
      dispatch({ type: UsersActionTypes.SET_IS_DISABLED_OPERATIONS, payload: id})
    } catch (e: unknown) {
      if (e instanceof Error) {
        // dispatch({ type: UsersActionTypes.FETCH_USERS_ERROR, payload: e.message });
      }
    }
  };
};
