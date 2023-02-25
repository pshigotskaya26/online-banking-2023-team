import React, { useEffect, useState } from 'react';
import './index.css';
import { ITransaction } from '../../types/interfaces/ITransaction';
import { getStringDate, getStringTime } from '../../utils/formateDateTime';
import { useAppSelector } from '../../hooks/useAppSelector';
import ICard from '../../types/interfaces/ICard';
import { getCardsByUserId } from '../../store/actions/cardsManagement';

interface TransactionItemProps {
  transaction: ITransaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { user } = useAppSelector((state) => state.authuser);
  const { cards: userCards } = useAppSelector((state) => state.usercards);
  const [card, setCard] = useState<ICard>({} as ICard);

  useEffect(() => {
    if (user !== null) {
      getCardsByUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    const card = userCards.find((card) => card.id === transaction.cardid);
    if (card) {
      setCard(card);
    }
  }, [userCards]);

  return (
    <tr className="transaction-item">
      <td className="transaction-item__orderNumb">{transaction.id}</td>
      <td className="transaction-item__date">
        <div>{getStringDate(transaction.timestamp)}</div>
        <div>{getStringTime(transaction.timestamp)}</div>
      </td>
      <td className="transaction-item__service">{transaction.entityid}</td>
      <td className="transaction-item__type">{transaction.entitytype}</td>
      <td className="transaction-item__status">{transaction.status}</td>
      <td className="transaction-item__value">
        {transaction.value} {card.currency}
      </td>
    </tr>
  );
};

export default TransactionItem;
