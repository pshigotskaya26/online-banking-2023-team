import React from "react";
import './index.css';
import ITransaction from "../../types/interfaces/ITransaction";

const TransactionItem = (transaction: ITransaction): JSX.Element => {
	return (
		<div className='transaction-item' id={transaction.id}>
			<div className="transaction-item__service">{transaction.entityid}</div>
			<div className="transaction-item__type">{transaction.entitytype}</div>
			<div className="transaction-item__date">{transaction.timestamp}</div>
			<div className="transaction-item__status">{transaction.status}</div>
			<div className="transaction-item__value">-{transaction.value}</div>
		</div>
	);
};

export default TransactionItem;