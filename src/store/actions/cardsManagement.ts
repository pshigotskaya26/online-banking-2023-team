import { Dispatch } from 'redux';
import { CardsActionTypes, CardsManagementActions } from '../types/cards';
import cardsAPI from '../../api/cardsAPI';
import ICard from '../../types/interfaces/ICard';
import { ITransaction } from '../../types/interfaces/ITransaction';
import TransactionStatusEnum from '../../types/enums/TransactionStatusEnum';
import TransactionsTypesEnum from '../../types/enums/TransactionsTypesEnum';
import transactionsAPI from '../../api/transactionsAPI';

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

export const replenishBalance = (cardId: number, cardCurrency: string, userId: number) => {
  return async (dispatch: Dispatch<CardsManagementActions>) => {
    try {
      dispatch({ type: CardsActionTypes.UPDATE_CARDS });
      const response = await cardsAPI.replenishBalance(cardId, cardCurrency);
      dispatch({
        type: CardsActionTypes.UPDATE_CARDS_WITH_SALARY_SUCCESS,
        payload: { cardId: cardId, amount: response },
      });


      const transactionFrom: ITransaction = {
        cardid: cardId,
        id: Date.now(),
        status: TransactionStatusEnum.SUCCESS,
        userid: userId,
        targetid: 122, //?
        value: +1000,
        entityid: 12, //?
        entitytype: TransactionsTypesEnum.DRAWBACK,
        timestamp: Date.now(),
      };
      transactionsAPI.addTransaction(transactionFrom);

    } catch (e: unknown) {
      if (e instanceof Error) {
        const transactionFrom: ITransaction = {
          cardid: cardId,
          id: Date.now(),
          status: TransactionStatusEnum.DECLINED,
          userid: userId,
          targetid: 122, //?
          value: -1000,
          entityid: 12, //?
          entitytype: TransactionsTypesEnum.DRAWBACK,
          timestamp: Date.now(),
        };
        transactionsAPI.addTransaction(transactionFrom);
        dispatch({
          type: CardsActionTypes.UPDATE_CARDS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};
