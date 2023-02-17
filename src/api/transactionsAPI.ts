import { ITransaction } from '../types/interfaces/ITransaction';

class TransactionsAPI {

  private findTransactions(): Array<ITransaction> | undefined {
    const data = localStorage.getItem('transactions') ?? '[]';
    const existTransactions: Array<ITransaction> = JSON.parse(data);
    return existTransactions;
  }

  fetchTransactions(): ITransaction[] {
    const transactions = this.findTransactions();
    if (!transactions) {
      throw new Error('Transactions not exist');
    }
    return transactions;
  }

  addTransaction(transaction: ITransaction): ITransaction[] {
    const transactions = this.findTransactions();
    let newTransactions = [];
    if (transactions?.length) {
      newTransactions = [...transactions, transaction];
    } else {
      newTransactions = [transaction];
    }

    return newTransactions;
  }


}

const transactionsAPI = new TransactionsAPI();
export default transactionsAPI;