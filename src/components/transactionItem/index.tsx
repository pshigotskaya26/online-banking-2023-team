import React, { useEffect, useState } from 'react';
import './index.css';
import { ITransaction } from '../../types/interfaces/ITransaction';
import { getStringDate, getStringTime } from '../../utils/formateDateTime';
import { useAppSelector } from '../../hooks/useAppSelector';
import ICard from '../../types/interfaces/ICard';
import { getCardsByUserId } from '../../store/actions/cardsManagement';
import IService from '../../types/interfaces/IService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TransactionItemProps {
  transaction: ITransaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { user } = useAppSelector((state) => state.authuser);
  const { cards: userCards } = useAppSelector((state) => state.usercards);
  const { services } = useAppSelector((state) => state.services);

  const [card, setCard] = useState<ICard>({} as ICard);
  const [service, setService] = useState<IService>({} as IService);

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

  useEffect(() => {
    const serv = services.find(
      (service) => service.id === transaction.entityid,
    );
    if (serv) {
      setService(serv);
    }
  }, [services]);

  return (
    <tr className="transaction-item">
      <td className="transaction-item__orderNumb">{transaction.id}</td>
      <td className="transaction-item__date">
        <div>{getStringDate(transaction.timestamp)}</div>
        <div>{getStringTime(transaction.timestamp)}</div>
      </td>
      <td className="transaction-item__service">
        <FontAwesomeIcon icon={service.icon!} size={'2x'} />{' '}
        <span className={'align-super ml-3'}>{service.title}</span>
      </td>
      <td className="transaction-item__type">{transaction.entitytype}</td>
      <td className="transaction-item__status">{transaction.status}</td>
      <td className="transaction-item__value">
        {transaction.value} {card.currency}
      </td>
    </tr>
  );
};

export default TransactionItem;
