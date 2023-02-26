import { IAdminUser, IClientUser } from '../../types/interfaces/IUser';
import ICard from '../../types/interfaces/ICard';

export interface CardsState {
  user: IClientUser | IAdminUser | null;
  cards: ICard[];
  loadingCardsInfo: boolean;
  errorLoadingCards: string;
}

export enum CardsActionTypes {
  FETCH_CARDS = 'FETCH_CARDS',
  FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',
  UPDATE_CARDS = 'UPDATE_CARDS',
  UPDATE_CARDS_SUCCESS = 'UPDATE_CARDS_SUCCESS',
  UPDATE_CARDS_ERROR = 'UPDATE_CARDS_ERROR',
  UPDATE_CARDS_WITH_SALARY_SUCCESS = 'UPDATE_CARDS_WITH_SALARY_SUCCESS',
}

interface FetchCards {
  type: CardsActionTypes.FETCH_CARDS;
}

interface FetchCardsSuccess {
  type: CardsActionTypes.FETCH_CARDS_SUCCESS;
  payload: ICard[];
}

interface FetchCardsError {
  type: CardsActionTypes.FETCH_CARDS_ERROR;
  payload: string;
}

interface UpdateUserCards {
  type: CardsActionTypes.UPDATE_CARDS;
}
interface UpdateUserCardsSuccess {
  type: CardsActionTypes.UPDATE_CARDS_SUCCESS;
  payload: ICard[];
}
interface UpdateUserCardsError {
  type: CardsActionTypes.UPDATE_CARDS_ERROR;
  payload: string;
}

interface UpdateUserCardsWithSalarySuccess {
  type: CardsActionTypes.UPDATE_CARDS_WITH_SALARY_SUCCESS;
  payload: { cardId: number, amount: number };
}

export type CardsManagementActions =
  | FetchCards
  | FetchCardsSuccess
  | FetchCardsError
  | UpdateUserCards
  | UpdateUserCardsSuccess
  | UpdateUserCardsError
  | UpdateUserCardsWithSalarySuccess;
