import { Dispatch } from 'redux';
import { CreditsActionTypes, CreditsManagementActions } from '../types/credits';
import creditsAPI from '../../api/creditsAPI';

export const getCreditsByUserId = (userid: number) => {
  return (dispatch: Dispatch<CreditsManagementActions>) => {
    try {
      dispatch({ type: CreditsActionTypes.FETCH_CREDITS });
      const response = creditsAPI.getCreditsByUserId(userid);
      dispatch({
        type: CreditsActionTypes.FETCH_CREDITS_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: CreditsActionTypes.FETCH_CREDITS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};
