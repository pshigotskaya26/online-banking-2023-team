import { ITransaction } from '../types/interfaces/ITransaction';
import cardsAPI from './cardsAPI';
import transactionsAPI from './transactionsAPI';

class PaymentsAPI {
  createPayment(transaction: ITransaction): ITransaction {
    const cards = cardsAPI.getCardsByUserId(transaction.userid);
    const card = cards.find((c) => c.id === transaction.cardid);
    if (!card) {
      throw new Error('The card is not exist');
    }
    if (card.balance < transaction.value) {
      throw new Error('Not enough money for payment');
    }

    return transactionsAPI.addTransaction(transaction);
  }
}

const paymentsAPI = new PaymentsAPI();
export default paymentsAPI;
