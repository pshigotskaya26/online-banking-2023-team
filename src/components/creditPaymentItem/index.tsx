import './index.css';
import React, { useState, useEffect } from 'react';
import ICreditPayment from '../../types/interfaces/ICreditPayment';
import CreditPaymentStatusEnum from '../../types/enums/CreditPaymentStatusEnum';
import CreditStatusButtonEnum from '../../types/enums/CreditStatusButtonEnum';
import CreditPaymentFineEnum from '../../types/enums/CreditPaymentFineEnum';
import { changeStatusPaymentButtonPay } from '../../utils/changeStatusPaymentButtonPay';
import { changePaymentFine } from '../../utils/changePaymentFine';
import { getCountOfDays } from '../../utils/getCountOfDays';
import {
  getStringDate,
  getStringDay,
  getStringMonth,
} from '../../utils/formateDateTime';
import ICard from '../../types/interfaces/ICard';
import ICredit from '../../types/interfaces/ICredit';

interface CreditPaymentItemProps {
  payment: ICreditPayment;
  cards: ICard[];
  credits: ICredit[];
  credit: ICredit;
}

const CreditPaymentItem: React.FC<CreditPaymentItemProps> = (props) => {
  const [currentCard, setCurrentCard] = useState<number>(props.cards[0].number);
  const [statusOfButtonPay, setStatusOfButtonPay] = useState<string>(
    props.payment.statusOfButton,
  );
  const [fineOfPayment, setFineOfPayment] = useState<number>(
    props.payment.fine,
  );

  //console.log('statusOfButtonPay: ', statusOfButtonPay);

  const handleSelectPaymentCard = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setCurrentCard(Number(event.target.value));
  };

  const currentDate = Date.now();
  const currentDay = getStringDay(currentDate);
  const currentMonth = getStringMonth(currentDate);
  console.log('currentDay and currentMonth: ', currentDay, currentMonth);

  const paymentDay = getStringDay(props.payment.dateOfContribution);
  const paymentMonth = getStringMonth(props.payment.dateOfContribution);
  console.log('paymentDay and paymentMonth: ', paymentDay, paymentMonth);

  useEffect(() => {
    if (
      (currentDay !== paymentDay && currentMonth !== paymentMonth) ||
      (currentDay !== paymentDay && currentMonth == paymentMonth)
    ) {
      //status of the payment is Paid
      if (props.payment.status === CreditPaymentStatusEnum.IS_PAID) {
        setStatusOfButtonPay(
          (props.payment.statusOfButton = CreditStatusButtonEnum.NO_ACTIVE),
        );

        changeStatusPaymentButtonPay(
          props.credit.id,
          props.payment.id,
          statusOfButtonPay,
        );
      }
      //status of the payment is not Paid
      if (props.payment.status === CreditPaymentStatusEnum.IS_NOT_PAID) {
        console.log('la-la');
        //if date of the payment < current date
        if (
          Number(paymentDay) < Number(currentDay) &&
          props.payment.dateOfContribution < currentDate
        ) {
          setStatusOfButtonPay(
            (props.payment.statusOfButton = CreditStatusButtonEnum.ACTIVE),
          );
          changeStatusPaymentButtonPay(
            props.credit.id,
            props.payment.id,
            statusOfButtonPay,
          );
          const differDays = getCountOfDays(
            currentDate,
            props.payment.dateOfContribution,
          );
          console.log('differ: ', differDays);

          setFineOfPayment(differDays * Number(CreditPaymentFineEnum.FIVE));
          changePaymentFine(props.credit.id, props.payment.id, fineOfPayment);
        }
      }
    }
  });

  return (
    <tr className="credit-payment-item">
      <td className="credit-payment__orderNumb">{props.payment.id + 1}</td>
      <td className="credit-payment__date">
        {getStringDate(props.payment.dateOfContribution)}
      </td>
      <td className="credit-payment__status">{props.payment.paymentValue}</td>
      <td className="credit-payment__service">{props.payment.status}</td>
      <td className="credit-payment__type">{fineOfPayment}</td>
      <td className="credit-payment__value">
        <button className={'button button-do-payment ' + statusOfButtonPay}>
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
