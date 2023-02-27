import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import IService from '../../../../types/interfaces/IService';
import { fetchServices } from '../../../../store/actions/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectCard from '../../../../components/selectCard';
import ICard from '../../../../types/interfaces/ICard';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Calculator from '../../../../components/calculator';
import Button from '../../../../components/button';
import { useActions } from '../../../../hooks/useActions';
import { ITransaction } from '../../../../types/interfaces/ITransaction';
import TransactionsTypesEnum from '../../../../types/enums/TransactionsTypesEnum';
import TransactionStatusEnum from '../../../../types/enums/TransactionStatusEnum';

interface PaymentFormProps {}

export const PaymentForm: FC<PaymentFormProps> = () => {
  const { code } = useParams();
  const { services } = useAppSelector((state) => state.services);
  const { cards } = useAppSelector((state) => state.usercards);
  const { user } = useAppSelector((state) => state.authuser);
  const { createPayment, addServiceToFavorites, removeServiceFromFavorites } =
    useActions();
  const navigate = useNavigate();

  const [service, setService] = useState<IService>({
    title: '',
    id: 0,
    code: 0,
    icon: undefined,
    isAvailable: false,
  });
  const [isFavoriteService, setIsFavorite] = useState(
    user?.favoriteServices.includes(service.id),
  );

  useEffect(() => {
    fetchServices();
  });
  useEffect(() => {
    const target = services.find(
      (service) => service.code === parseInt(code ?? ''),
    );
    if (target) setService(target);
  }, [services]);

  useEffect(() => {
    if (user !== null) {
      setIsFavorite(user.favoriteServices.includes(service.id));
    }
  }, [user, service]);

  const [activeCard, setActiveCard] = useState<ICard>({} as ICard);
  useEffect(() => {
    setActiveCard(cards[0]);
  }, [cards]);

  const [paymentSum, setPaymentSum] = useState(0);
  const [isCalcShow, setIsCalcShow] = useState(false);
  const handlePayment = () => {
    const transaction: ITransaction = {
      id: 0,
      cardid: activeCard.id,
      timestamp: Date.now(),
      targetid: service.id,
      userid: user?.id ?? 0,
      value: -1 * paymentSum,
      entitytype: TransactionsTypesEnum.PAYMENT,
      status: TransactionStatusEnum.PENDING,
      cardNumber: activeCard.number,
      cardCurrency: activeCard.currency,
    };
    createPayment(transaction);
    navigate('/payments');
  };

  const addToFavorites = () => {
    if (user && service) {
      addServiceToFavorites(user.id, service.id);
    }
  };

  const removeFromFavorites = () => {
    if (user && service) {
      removeServiceFromFavorites(user.id, service.id);
    }
  };

  const isButtonDisabled = paymentSum === 0 || paymentSum > activeCard?.balance;

  return (
    <div className={'w-1/2 mx-auto'}>
      <hr />
      <div className={'flex p-3 my-3 bg-blue-200 rounded-2xl'}>
        {' '}
        <div className={'mx-3 flex items-center justify-center w-1/12'}>
          {service.icon && (
            <FontAwesomeIcon icon={service.icon} size={'4x'}></FontAwesomeIcon>
          )}
        </div>
        <div className={'mx-3 text-xl flex items-center'}>{service.title}</div>
      </div>
      <hr />
      <div className={'my-3 flex flex-col items-center'}>
        <h2 className="font-light mb-2 font-bold ">Select card</h2>
        <SelectCard
          cards={cards}
          activeCardData={activeCard}
          setActiveCard={setActiveCard}
        />
      </div>
      <div className="my-3 w-full min-w-full">
        <div className="flex justify-center content-center items-center">
          <h3 className={'font-bold mr-2'}>Amount</h3>
          <input
            type="number"
            min="0"
            max={activeCard.balance}
            className="border bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500
                              focus:ring-blue-500 rounded-lg p-2.5 text-sm mr-2 text-end w-1/2"
            value={paymentSum}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPaymentSum(+e.target.value)
            }
          />
          <button onClick={() => setIsCalcShow(!isCalcShow)}>
            <FontAwesomeIcon icon={faKeyboard} />
          </button>
          {isCalcShow && (
            <div className={'border bg-gray-100 p-2 absolute min-w-[250px]'}>
              <Calculator
                value={paymentSum}
                setValue={setPaymentSum}
                closeCalculator={() => setIsCalcShow(false)}
              />
            </div>
          )}
        </div>
      </div>
      <div className={'my-3 flex justify-center'}>
        <div className={'w-2/3'}>
          <Button
            text={'Apply'}
            handleButton={handlePayment}
            isDisable={isButtonDisabled}
          />
        </div>
      </div>
      {}
      <div className={'my-3 flex justify-center'}>
        <div className={'w-2/3'}>
          {isFavoriteService ? (
            <Button
              text={'Remove from Favorites'}
              handleButton={removeFromFavorites}
              isDisable={false}
            />
          ) : (
            <Button
              text={'Add to Favorites'}
              handleButton={addToFavorites}
              isDisable={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};
