import './index.css';
import React, { useState } from 'react';
import ICreditPayment from '../../types/interfaces/ICreditPayment';
import { getStringDate } from '../../utils/formateDateTime';
import ICard from '../../types/interfaces/ICard';

interface CreditPaymentItemProps {
  payment: ICreditPayment;
  cards: ICard[];
}

const CreditPaymentItem: React.FC<CreditPaymentItemProps> = (props) => {
  console.log('cards in PaymentItem: ', props.cards);

  const [currentCard, setCurrentCard] = useState<number>(props.cards[0].number);

  const handleSelectPaymentCard = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setCurrentCard(Number(event.target.value));
    console.log('currentCard: ', currentCard);
  };

  return (
    <tr className="credit-payment-item">
      <td className="credit-payment__orderNumb">{props.payment.id + 1}</td>
      <td className="credit-payment__date">
        {getStringDate(props.payment.dateOfContribution)}
      </td>
      <td className="credit-payment__status">{props.payment.paymentValue}</td>
      <td className="credit-payment__service">{props.payment.status}</td>
      <td className="credit-payment__type">{props.payment.fine}</td>
      <td className="credit-payment__value">
        <button
          className={'button button-do-payment ' + props.payment.statusOfButton}
        >
          Pay
        </button>
      </td>
      <td className="credit-payment__card">
        <select
          onChange={handleSelectPaymentCard}
          className="select-payment-card w-full"
          size={props.cards.length}
          value={currentCard}
        >
          {props.cards.map((cardItem: ICard) => (
            <option key={cardItem.id} value={cardItem.number}>
              {cardItem.number} ({cardItem.currency}) (Balance:{' '}
              {cardItem.balance})
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

export default CreditPaymentItem;
