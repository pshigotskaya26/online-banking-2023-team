import { Dispatch } from 'redux';

import {
  CreditsAdminActions,
  CreditsAdminActionTypes,
} from '../types/credits-admin';
import creditsAdminAPI from '../../api/creditsAdminAPI';

export const fetchCreditsAll = () => {
  return (dispatch: Dispatch<CreditsAdminActions>) => {
    try {
      dispatch({ type: CreditsAdminActionTypes.FETCH_CREDITS });
      const response = creditsAdminAPI.fetchCredits();
      dispatch({
        type: CreditsAdminActionTypes.FETCH_CREDITS_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
      }
    }
  };
};
