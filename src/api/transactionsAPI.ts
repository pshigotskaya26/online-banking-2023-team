import { ITransaction } from '../types/interfaces/ITransaction';
import { tab } from '@testing-library/user-event/dist/tab';

class TransactionsAPI {
  private getAllTransactions(): ITransaction[] {
    const transactions: ITransaction[] = JSON.parse(
      localStorage.getItem('transactions') ?? '[]',
    );
    return transactions;
  }

  addTransaction(transaction: ITransaction): ITransaction {
    const transactions = this.getAllTransactions();
    transaction.id = transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    return transaction;
  }

  getTransactionsByUserId(userid: number): ITransaction[] {
    const transactions = this.getAllTransactions();
    return transactions.filter((transaction) => transaction.userid === userid);
  }
}

const transactions = new TransactionsAPI();

export default transactions;
