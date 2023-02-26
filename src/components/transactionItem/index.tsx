import React from 'react';
import './index.css';
import { ITransaction } from '../../types/interfaces/ITransaction';
import { getStringDate, getStringTime } from '../../utils/formateDateTime';
import TransactionStatusEnum from '../../types/enums/TransactionStatusEnum';

interface TransactionItemProps {
  transaction: ITransaction;
}

const TransactionItem: React.FC<TransactionItemProps> = (props) => {
  return (
    <tr className="transaction-item">
      <td className="transaction-item__orderNumb">{props.transaction.id}</td>
      <td className="transaction-item__date">
        <div>{getStringDate(props.transaction.timestamp)}</div>
        <div>{getStringTime(props.transaction.timestamp)}</div>
      </td>
      <td className="transaction-item__service">
        {props.transaction.cardNumber}
      </td>
      <td className="transaction-item__type">{props.transaction.entitytype}</td>
      <td className="transaction-item__status">{props.transaction.status}</td>
      <td
        className={`transaction-item__value 
			${
        props.transaction.status === TransactionStatusEnum.SUCCESS &&
        'text-green-500'
      }
			${props.transaction.status === TransactionStatusEnum.DECLINED && 'text-red-500'}
			`}
      >
        {props.transaction.value > 0 && '+'}
        {props.transaction.value} {props.transaction.cardCurrency}
      </td>
    </tr>
  );
};

export default TransactionItem;
