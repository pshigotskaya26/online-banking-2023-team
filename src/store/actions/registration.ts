import { Dispatch } from 'redux';
import { IAdminUser, IClientUser } from '../../types/interfaces/IUser';
import authUserAPI from '../../api/userAPI';
import { RegisterActionTypes, RegisterUserActions } from '../types/register';

export const createUserInfo = (userInfo: IAdminUser | IClientUser) => {
  return (dispatch: Dispatch<RegisterUserActions>) => {
    console.log(userInfo);
    try {
      dispatch({ type: RegisterActionTypes.CREATE_USERINFO });
      const updatedInfo = authUserAPI.createUserInfo(userInfo);
      console.log(updatedInfo);
      dispatch({
        type: RegisterActionTypes.CREATE_USERINFO_SUCCESS,
        payload: updatedInfo,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
        dispatch({
          type: RegisterActionTypes.CREATE_USERINFO_ERROR,
          payload: e.message,
        });
      }
    }
  };
};
