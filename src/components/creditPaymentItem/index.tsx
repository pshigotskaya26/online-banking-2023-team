import './index.css';
import React from 'react';
import ICreditPayment from '../../types/interfaces/ICreditPayment';
import { getStringDate } from '../../utils/formateDateTime';

interface CreditPaymentItemProps {
  payment: ICreditPayment;
}

const CreditPaymentItem: React.FC<CreditPaymentItemProps> = (props) => {
  return (
    <tr className="credit-payment-item">
      <td className="transaction-item__orderNumb">{props.payment.id + 1}</td>
      <td className="transaction-item__date">
        {getStringDate(props.payment.dateOfContribution)}
      </td>
      <td className="transaction-item__status">{props.payment.paymentValue}</td>
      <td className="transaction-item__service">{props.payment.status}</td>
      <td className="transaction-item__type">{props.payment.fine}</td>
      <td className="transaction-item__value">
        <button className="button button-do-payment">Pay</button>
      </td>
    </tr>
  );
};

export default CreditPaymentItem;
