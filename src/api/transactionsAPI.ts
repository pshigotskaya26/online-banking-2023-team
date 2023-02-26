import { ITransaction, ITransferData } from '../types/interfaces/ITransaction';
import TransactionStatusEnum from '../types/enums/TransactionStatusEnum';
import TransactionsTypesEnum from '../types/enums/TransactionsTypesEnum';
import ICard from '../types/interfaces/ICard';
import CardCurrencyEnum from '../types/enums/CardCurrencyEnum';

class TransactionsAPI {
  private findTransactionsByID(id: number): Array<ITransaction> | undefined {
    const data = localStorage.getItem('transactions') ?? '[]';
    const existTransactions: Array<ITransaction> = JSON.parse(data);
    return existTransactions.filter((el) => el.userid === id);
  }

  private getUserIdByCardID(cardID: number): number {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    let activeCard = existCards.find((el) => el.id === cardID);
    return activeCard ? activeCard.userid : 1;
  }

  private getCurrencyByCardID(cardID: number): CardCurrencyEnum {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    let activeCard = existCards.find((el) => el.id === cardID);
    return activeCard
      ? (activeCard.currency as CardCurrencyEnum)
      : CardCurrencyEnum.BYN;
  }

  private getNumberCardByCardID(cardID: number): number {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    let activeCard = existCards.find((el) => el.id === cardID);
    return activeCard ? activeCard.number : 1;
  }

  private getCardInfoByNumberCard(numberCard: number): ICard | undefined {
    const data = localStorage.getItem('cards') ?? '[]';
    const existCards: ICard[] = JSON.parse(data);
    return existCards.find((el) => el.number === numberCard);
  }

  fetchTransactions(id: number): ITransaction[] {
    const transactions = this.findTransactionsByID(id);
    if (!transactions) {
      throw new Error('Transactions not exist');
    }
    return transactions;
  }

  private addTransaction(transaction: ITransaction): ITransaction[] {
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

  createTransactionTransfer(
    transferData: ITransferData,
    error: boolean = false,
  ) {
    const cardFrom = this.getCardInfoByNumberCard(transferData.cardFrom);
    const cardTo = this.getCardInfoByNumberCard(transferData.cardTo);

    if (cardFrom && cardTo) {
      const transactionFrom: ITransaction = {
        cardid: cardFrom.id,
        cardCurrency: cardFrom.currency as CardCurrencyEnum,
        value: -transferData.amountFrom,
        cardNumber: cardFrom.number,
        userid: cardFrom.userid,
        status: error
          ? TransactionStatusEnum.DECLINED
          : TransactionStatusEnum.SUCCESS,
        id: Date.now(),
        entitytype: TransactionsTypesEnum.TRANSFER,
        timestamp: Date.now(),
      };

      const transactionTo: ITransaction = {
        cardid: cardTo.id,
        cardCurrency: cardTo.currency as CardCurrencyEnum,
        value: transferData.amountTo
          ? transferData.amountTo
          : transferData.amountFrom,
        cardNumber: cardTo.number,
        userid: cardTo.userid,
        status: error
          ? TransactionStatusEnum.DECLINED
          : TransactionStatusEnum.SUCCESS,
        id: Date.now() + 1,
        entitytype: TransactionsTypesEnum.TRANSFER,
        timestamp: Date.now(),
      };

      this.addTransaction(transactionFrom);
      if (!error) {
        this.addTransaction(transactionTo);
      }
    }
  }

  createTransactionReplanish(
    cardId: number,
    convertedSalaryFixed: number,
    error: boolean = false,
  ) {
    const transaction: ITransaction = {
      cardid: cardId,
      cardCurrency: this.getCurrencyByCardID(cardId),
      value: convertedSalaryFixed,
      cardNumber: this.getNumberCardByCardID(cardId),
      userid: this.getUserIdByCardID(cardId),
      status: error
        ? TransactionStatusEnum.DECLINED
        : TransactionStatusEnum.SUCCESS,
      id: Date.now(),
      entitytype: TransactionsTypesEnum.DRAWBACK,
      timestamp: Date.now(),
    };
    this.addTransaction(transaction);
  }

  createTransactionPayment(transaction: ITransaction): ITransaction {
    const transactions: ITransaction[] = JSON.parse(
      localStorage.getItem('transactions') ?? '[]',
    );
    transaction.id = transactions.push(transaction);
    transaction.status = TransactionStatusEnum.SUCCESS;
    localStorage.setItem('transactions', JSON.stringify(transactions));
    return transaction;
  }
}

const transactionsAPI = new TransactionsAPI();
export default transactionsAPI;
