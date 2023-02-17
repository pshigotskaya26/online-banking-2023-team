import React, { useEffect } from 'react';
import './index.css';
import { ITransaction } from '../../types/interfaces/ITransaction';
import TransactionItem from '../transactionItem';
import EmptyBox from '../enptyBox';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';

interface TransitionListProps {
}

const TransactionList: React.FC<TransitionListProps> = () => {
  const { fetchTransactions } = useActions()
  const { transactions } = useAppSelector(state => state.transactions)
  const { user } = useAppSelector(state => state.authuser)

  useEffect(() => {
    if (user) {
      fetchTransactions(user.id)
    }
  }, [])

  return (
    <div className='transactionList-container'>
      <h2 className='transactionList__title'>Transaction history:</h2>
      <div className='transactionList__content'>
        {
          transactions.length
						? <table className='transactionList__table'>
            <thead className='transactionList__head'>
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
            {
              transactions.map((transactionItem: ITransaction) => (
                <TransactionItem key={transactionItem.id} transaction={transactionItem} />
              ))
            }
            </tbody>
          </table>
						: <EmptyBox text={"Empty"}/>
        }


      </div>
    </div>
  );
};

export default TransactionList;