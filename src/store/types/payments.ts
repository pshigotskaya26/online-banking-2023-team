import { ITransaction } from '../../types/interfaces/ITransaction';

export interface PaymentsState {
  transactions: ITransaction[];
  loadingPayments: boolean;
  errorLoadingPayments: string;
}

export enum PaymentsActionTypes {
  CREATE_PAYMENT = 'CREATE_PAYMENT',
  CREATE_PAYMENT_SUCCESS = 'CREATE_PAYMENT_SUCCESS',
  CREATE_PAYMENT_ERROR = 'CREATE_PAYMENT_ERROR',
}

interface CreatePayment {
  type: PaymentsActionTypes.CREATE_PAYMENT;
}

interface CreatePaymentSuccess {
  type: PaymentsActionTypes.CREATE_PAYMENT_SUCCESS;
  payload: ITransaction;
}

interface CreatePaymentError {
  type: PaymentsActionTypes.CREATE_PAYMENT_ERROR;
  payload: string;
}

export type PaymentsActions =
  | CreatePayment
  | CreatePaymentSuccess
  | CreatePaymentError;
