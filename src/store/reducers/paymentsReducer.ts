import {
  PaymentsActions,
  PaymentsActionTypes,
  PaymentsState,
} from '../types/payments';

const initialState: PaymentsState = {
  transactions: [],
  loadingPayments: false,
  errorLoadingPayments: '',
};

export const PaymentsReducer = (
  state = initialState,
  action: PaymentsActions,
): PaymentsState => {
  switch (action.type) {
    case PaymentsActionTypes.CREATE_PAYMENT:
      return { ...state, loadingPayments: true };
    case PaymentsActionTypes.CREATE_PAYMENT_SUCCESS:
      return {
        ...state,
        loadingPayments: false,
        transactions: [...state.transactions, action.payload],
      };
    case PaymentsActionTypes.CREATE_PAYMENT_ERROR:
      return {
        ...state,
        loadingPayments: false,
        errorLoadingPayments: action.payload,
      };
    default:
      return state;
  }
};
