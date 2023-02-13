import { UsersActions, UsersActionTypes, UsersState } from '../types/users';

const initialState: UsersState = {
  users: [],
  isLoadingUsers: false,
  errorLoadingUsers: '',
};

export const UsersReducer = (state = initialState, action: UsersActions): UsersState => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return { ...state, isLoadingUsers: true };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { ...state, isLoadingUsers: false, users: action.payload, errorLoadingUsers: '' };
    case UsersActionTypes.FETCH_USERS_ERROR:
      return { ...state, isLoadingUsers: false, errorLoadingUsers: action.payload};
    default:
      return state;
  }
};