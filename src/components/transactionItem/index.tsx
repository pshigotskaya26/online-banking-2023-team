import React from "react";
import './index.css';
import { ITransaction } from "../../types/interfaces/ITransaction";
import { getStringDate } from "../../utils/formateDateTime";
import { getStringTime } from "../../utils/formateDateTime";


interface TransactionItemProps {
    transaction: ITransaction;
}

const TransactionItem: React.FC<TransactionItemProps> = (props) => {
	return (
		<tr className='transaction-item'>
			<td className="transaction-item__orderNumb">{props.transaction.id}</td>
			<td className="transaction-item__date"><div>{getStringDate(props.transaction.timestamp)}</div><div>{getStringTime(props.transaction.timestamp)}</div></td>
			<td className="transaction-item__service">{props.transaction.entityid}</td>
			<td className="transaction-item__type">{props.transaction.entitytype}</td>
			<td className="transaction-item__status">{props.transaction.status}</td>
			<td className="transaction-item__value">- {props.transaction.value}</td>
		</tr>
	);
};

export default TransactionItem;