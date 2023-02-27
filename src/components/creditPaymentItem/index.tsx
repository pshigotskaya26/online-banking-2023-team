import './index.css';
import React from 'react';
import ICreditPayment from '../../types/interfaces/ICreditPayment';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getStringDate } from '../../utils/formateDateTime';
import ICard from '../../types/interfaces/ICard';
import ICredit from '../../types/interfaces/ICredit';

interface CreditPaymentItemProps {
  payment: ICreditPayment;
  id: number;
  cards: ICard[];
  credits: ICredit[];
  credit: ICredit;
}

const CreditPaymentItem: React.FC<CreditPaymentItemProps> = (props) => {
  const { user } = useAppSelector((state) => state.authuser);
  const { payCreditPayment, decreaseTheBalanceForPayment } = useActions();

  const payPayment = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (user !== null) {
      payCreditPayment(props.id, props.credits, props.cards, props.credit);
      decreaseTheBalanceForPayment(
        props.id,
        props.credits,
        props.cards,
        props.credit,
      );
    }
  };
  return (
    <tr className="credit-payment-item">
      <td className="credit-payment__orderNumb">{props.payment.id + 1}</td>
      <td className="credit-payment__date">
        {getStringDate(props.payment.dateOfContribution)}
      </td>
      <td className="credit-payment__value">{props.payment.paymentValue}</td>
      <td className="credit-payment__status">{props.payment.status}</td>
      <td className="credit-payment__fine">{props.payment.fine}</td>
      <td className="credit-payment__button">
        <button
          className={'button button-do-payment ' + props.payment.statusOfButton}
          id={`${props.id}`}
          onClick={(event) => {
            payPayment(event);
          }}
        >
          Pay
        </button>
      </td>
    </tr>
  );
};

export default CreditPaymentItem;
