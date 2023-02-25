import React, { useEffect, useState } from 'react';
import './index.css';
import { ITransaction } from '../../types/interfaces/ITransaction';
import TransactionItem from '../transactionItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';

interface TransitionListProps {}

const TransactionList: React.FC<TransitionListProps> = () => {
  const { user } = useAppSelector((state) => state.authuser);
  const { transactions: userTransactions } = useAppSelector(
    (state) => state.transactions,
  );

  const { getTransactionsByUserId } = useActions();
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    if (user !== null) {
      getTransactionsByUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    console.log(userTransactions);
    setTransactions(userTransactions);
  }, [userTransactions]);

  const { fetchServices } = useActions();
  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="transactionList-container">
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
            {transactions.map((transactionItem: ITransaction) => (
              <TransactionItem
                key={transactionItem.id}
                transaction={transactionItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
