import { Dispatch } from 'redux';
import { CardsActionTypes, CardsManagementActions } from '../types/cards';
import cardsAPI from '../../api/cardsAPI';
import ICard from '../../types/interfaces/ICard';
import ICredit from '../../types/interfaces/ICredit';
import transactionsAPI from '../../api/transactionsAPI';
import CardCurrencyEnum from '../../types/enums/CardCurrencyEnum';

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
    const currencyFrom = CardCurrencyEnum.BYN;
    const currencyTo = cardCurrency;
    const salary = 1000;
    const convertedSalary = await cardsAPI.getConvertedMoney(
      currencyFrom,
      currencyTo,
      salary,
    );
    const convertedSalaryFixed = +convertedSalary.toFixed(2);

    try {
      dispatch({ type: CardsActionTypes.UPDATE_CARDS });

      const response = await cardsAPI.replenishBalance(
        cardId,
        convertedSalaryFixed,
      );
      await transactionsAPI.createTransactionReplanish(
        cardId,
        convertedSalaryFixed,
      );
      dispatch({
        type: CardsActionTypes.UPDATE_CARDS_WITH_SALARY_SUCCESS,
        payload: [], //{ cardId: cardId, amount: response },
      });
    } catch (e: unknown) {
      await transactionsAPI.createTransactionReplanish(
        cardId,
        convertedSalaryFixed,
        true,
      );
      if (e instanceof Error) {
        dispatch({
          type: CardsActionTypes.UPDATE_CARDS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};

export const replenishBalanceForCredit = (
  cardId: number,
  summOfCredit: number,
) => {
  return async (dispatch: Dispatch<CardsManagementActions>) => {
    try {
      dispatch({ type: CardsActionTypes.UPDATE_CARDS });
      const response = await cardsAPI.replenishBalanceForCredit(
        cardId,
        summOfCredit,
      );
      dispatch({
        type: CardsActionTypes.UPDATE_CARDS_WITH_SALARY_SUCCESS,
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

export const decreaseTheBalance = (
  idPayment: number,
  credits: ICredit[],
  cards: ICard[],
  credit: ICredit,
) => {
  return (dispatch: Dispatch<CardsManagementActions>) => {
    try {
      dispatch({ type: CardsActionTypes.UPDATE_CARDS });
      const response = cardsAPI.decreaseTheBalance(
        idPayment,
        credits,
        cards,
        credit,
      );
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
