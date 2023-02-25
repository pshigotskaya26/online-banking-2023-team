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

export const getPaymentsByDays = () => {
  return (dispatch: Dispatch<CreditsAdminActions>) => {
    const data = creditsAdminAPI.fetchPaymentsByDays();
    dispatch({
      type: CreditsAdminActionTypes.FETCH_PAYMENTS_BY_DAYS,
      payload: data,
    });
  };
};

export const getCreditsByDays = () => {
  return (dispatch: Dispatch<CreditsAdminActions>) => {
    const data = creditsAdminAPI.fetchCreditsByDays();
    dispatch({
      type: CreditsAdminActionTypes.FETCH_CREDITS_BY_DAYS,
      payload: data,
    });
  };
};
