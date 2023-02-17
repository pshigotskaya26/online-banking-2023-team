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
      return { ...state, isLoadingUsers: false, errorLoadingUsers: action.payload };
    case UsersActionTypes.SET_IS_DISABLED_OPERATIONS:
      return {
        ...state,
        users: state.users.map(el => {
          if (el.id === action.payload) {
            return {
              ...el,
              isDisabledOperations: !el.isDisabledOperations,
            };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};