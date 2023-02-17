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

export const updateCards = (userCards: ICard[]) => {
  return (dispatch: Dispatch<CardsManagementActions>) => {
    try {
      dispatch({ type: CardsActionTypes.UPDATE_CARDS });
      const response = cardsAPI.updateCards(userCards);
      dispatch({
        type: CardsActionTypes.UPDATE_CARDS_SUCCESS,
        payload: response,
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

export const addUserCard = (newCard: ICard) => {
  return (dispatch: Dispatch<CardsManagementActions>) => {
    try {
      dispatch({ type: CardsActionTypes.UPDATE_CARDS });
      const response = cardsAPI.addUserCard(newCard);
      dispatch({
        type: CardsActionTypes.UPDATE_CARDS_SUCCESS,
        payload: response,
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

export const replenishBalance = (cardId: number, cardCurrency: string) => {
  return async (dispatch: Dispatch<CardsManagementActions>) => {
    try {
      dispatch({ type: CardsActionTypes.UPDATE_CARDS });
      const response = await cardsAPI.replenishBalance(cardId, cardCurrency);
      dispatch({
        type: CardsActionTypes.UPDATE_CARDS_WITH_SALARY_SUCCESS,
        payload: { cardId: cardId, amount: response },
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
