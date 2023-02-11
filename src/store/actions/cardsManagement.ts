import { Dispatch } from 'redux';
import { CardsActionTypes, CardsManagementActions } from '../types/cards';
import cardsAPI from '../../api/cardsAPI';
import ICard from '../../types/interfaces/ICard';

export const getCardsByUserId = (userid: number) => {
  return (dispatch: Dispatch<CardsManagementActions>) => {
    try {
      dispatch({ type: CardsActionTypes.FETCH_CARDS });
      const response = cardsAPI.getCardsByUserId(userid);
      dispatch({
        type: CardsActionTypes.FETCH_CARDS_SUCCESS,
        payload: response,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        dispatch({
          type: CardsActionTypes.FETCH_CARDS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};

export const updateUserCards = (userid: number, userCards: ICard[]) => {
  return (dispatch: Dispatch<CardsManagementActions>) => {
    try {
      dispatch({ type: CardsActionTypes.UPDATE_CARDS });
      const response = cardsAPI.updateUserCards(userid, userCards);
      dispatch({
        type: CardsActionTypes.UPDATE_CARDS_SUCCESS,
        payload: userCards,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
        dispatch({
          type: CardsActionTypes.UPDATE_CARDS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};
