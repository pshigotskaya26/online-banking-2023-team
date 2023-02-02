import React from "react";
import './index.css';
import ITransaction from "../../types/interfaces/ITransaction";
import TransactionItem from "../transactionItem";

const TransactionList = (transactions: ITransaction[]) => {
	return (
		<div className='transactionList-container'>
			<h2>Transaction history:</h2>
			{transactions.map((transactionItem: ITransaction) => (
				<TransactionItem id={transactionItem.id} transaction={transactionItem} />
			))}
		</div>
	);
};

export default TransactionList;