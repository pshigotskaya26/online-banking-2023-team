import React from "react";
import './index.css';
import { ITransaction } from "../../types/interfaces/ITransaction";
import TransactionItem from "../transactionItem";

interface TransitionListProps {
    transactions: ITransaction[];
}

const TransactionList: React.FC<TransitionListProps> = (props) => {
	return (
		<div className='transactionList-container'>
			<h2 className="transactionList__title">Transaction history:</h2>
			<div className="transactionList__content">
				<table className="transactionList__table">
					<thead className="transactionList__head">
						<tr>
							<th>№</th>
							<th>Date</th>
							<th>Service</th>
							<th>Payment type</th>
							<th>Status</th>
							<th>Sum</th>
						</tr>
					</thead>
					<tbody>
						{props.transactions.map((transactionItem: ITransaction) => (
							<TransactionItem key={transactionItem.id} transaction={transactionItem} />
						))}
					</tbody>
				</table>
				
			</div>
		</div>
	);
};

export default TransactionList;