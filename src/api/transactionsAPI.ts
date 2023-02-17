import { ITransaction } from '../types/interfaces/ITransaction';

class TransactionsAPI {

  private findTransactionsByID(id: number): Array<ITransaction> | undefined {
    const data = localStorage.getItem('transactions') ?? '[]';
    const existTransactions: Array<ITransaction> = JSON.parse(data);
    return existTransactions.filter(el => el.userid === id);
  }

  fetchTransactions(id: number): ITransaction[] {
    const transactions = this.findTransactionsByID(id);
    if (!transactions) {
      throw new Error('Transactions not exist');
    }
    return transactions;
  }

  addTransaction(transaction: ITransaction): ITransaction[] {
    const transactions = this.findTransactionsByID(transaction.userid);
    let newTransactions = [];
    if (transactions?.length) {
      newTransactions = [...transactions, transaction];
    } else {
      newTransactions = [transaction];
    }
    localStorage.setItem('transactions', JSON.stringify(newTransactions));
    return newTransactions;
  }


}

const transactionsAPI = new TransactionsAPI();
export default transactionsAPI;