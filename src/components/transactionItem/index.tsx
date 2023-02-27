import React, { useEffect, useState } from 'react';
import './index.css';
import { ITransaction } from '../../types/interfaces/ITransaction';
import { getStringDate, getStringTime } from '../../utils/formateDateTime';
import TransactionStatusEnum from '../../types/enums/TransactionStatusEnum';
import TransactionsTypesEnum from '../../types/enums/TransactionsTypesEnum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getStringCardNumber } from '../../utils/formateCardData';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCardsByUserId } from '../../store/actions/cardsManagement';
import IService from '../../types/interfaces/IService';
import { useActions } from '../../hooks/useActions';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

interface TransactionItemProps {
  transaction: ITransaction;
  index: number;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  index,
}) => {
  const { fetchServices } = useActions();
  const { user } = useAppSelector((state) => state.authuser);
  const { services } = useAppSelector((state) => state.services);
  const [service, setService] = useState<IService>({} as IService);

  useEffect(() => {
    if (user !== null) {
      getCardsByUserId(user.id);
      fetchServices();
    }
  }, [user]);

  useEffect(() => {
    const serv = services.find(
      (service) => service.id === transaction.targetid,
    );
    if (serv) {
      setService(serv);
    }
  }, [services]);

  return (
    <tr className="transaction-item">
      <td className="transaction-item__orderNumb">{index + 1}</td>
      <td className="transaction-item__date">
        <div>
          {getStringDate(transaction.timestamp)} /{' '}
          {getStringTime(transaction.timestamp)}
        </div>
      </td>
      <td className="transaction-item__service">
        {transaction.entitytype === TransactionsTypesEnum.INVOICE &&
          getStringCardNumber(transaction.cardNumber)}
        {transaction.entitytype === TransactionsTypesEnum.TRANSFER &&
          getStringCardNumber(transaction.cardNumber)}
        {transaction.entitytype === TransactionsTypesEnum.PAYMENT && (
          <>
            <FontAwesomeIcon icon={service.icon ?? faQuestion} size={'2x'} />{' '}
            <span className={'align-super ml-3'}>
              {service.icon ? service.title : 'Unknown service'}
            </span>
          </>
        )}
      </td>
      <td className="transaction-item__type">{transaction.entitytype}</td>
      <td className="transaction-item__status">{transaction.status}</td>
      <td
        className={`transaction-item__value 
			${transaction.value > 0 && 'text-green-500'}
			${transaction.value < 0 && 'text-red-500'}
			`}
      >
        {transaction.value > 0 && '+'}
        {transaction.value} {transaction.cardCurrency}
      </td>
    </tr>
  );
};

export default TransactionItem;
