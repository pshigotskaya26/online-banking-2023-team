import PageTitle from '../../components/pageTitle';
import ClientLayout from '../../layouts/client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from '../../components/button';
import Calculator from '../../components/calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import CardCurrencyEnum from '../../types/enums/CardCurrencyEnum';
import SelectCard from '../../components/selectCard';
import InputCard from '../../components/inputCard';
import { getCardInfo, makeATransactionByNumberCard } from '../../store/actions/transfers';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ITransactionData } from '../../types/interfaces/ITransaction';
import ErrorMessage from '../../components/errorMessage';

interface ICard {
  id: number; // internal
  number: number; // 5454 1234 1234 1234
  expired: number; // Date.now() 08/25
  currency: string; // BYN/RUB/USD
  account: string; // IBAN BY134678484000000154501
  userid: number;
  balance: number;
  background: string;
  isShown: boolean;
}

const TransfersPage = () => {
  const { cardTo } = useAppSelector(state => state.transfers);
  // const { user } = useAppSelector(state => state.authuser);
  const [cards, setCards] = useState<ICard[]>([]);
  const { getCardInfo, makeATransactionByNumberCard } = useActions();
  const [isVisibleCalculator, setIsVisibleCalculator] = useState<boolean>(false);
  const [activeCardFrom, setActiveCardFrom] = useState<ICard>(cards[0] || {});
  const [numberCardTo, setNUmberCardTo] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  //
  // useEffect(() => {
  //
  // }, [])


  const handleButtonTransfer = () => {
    const transactionData: ITransactionData = {
      cardFrom: activeCardFrom.number,
      cardTo: numberCardTo,
      amount: amount,
    };
    makeATransactionByNumberCard(transactionData);

  };

  const handleNumberCardTo = (n: number) => {
    setNUmberCardTo(n);
    if (n.toString().length === 16) {
      getCardInfo(n);
    }
  };

  const handleValueCalculator = (n: number) => {
    setAmount(n);
    setIsVisibleCalculator(false);
  };

  const handleAmountValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

  const isDisableButton =
    activeCardFrom.number?.toString().length === 16 &&
    cardTo?.number.toString().length === 16 &&
    amount !== 0 &&
    (cardTo?.currency === activeCardFrom.currency && cardTo);

  return (
    <ClientLayout>
      <PageTitle
        title={'Transfers from card to card'}
        description={
          'Online service for money transfers from card to card of any bank'
        }
      />

      <div className='bg-white py-6 sm:py-8 lg:py-18'>
        <div className={'flex justify-evenly mb-12'}>
          <div>
            <h2 className='font-light mb-2 font-bold '>
              Выбрать карту отправителя
            </h2>
            <SelectCard cards={cards} activeCardData={activeCardFrom} setActiveCard={setActiveCardFrom} />
          </div>
          <div>
            <h2 className='font-light mb-2 font-bold '>
              Введите карту получателя
            </h2>
            <InputCard value={numberCardTo} handleInputValue={handleNumberCardTo} canTransfer={!!(cardTo?.number)} />
          </div>
        </div>
        {
          (cardTo?.currency !== activeCardFrom.currency && cardTo) &&
          <ErrorMessage
            text={'We are sorry, transfers to cards with other currencies are not available at the moment'} />
        }
        <div className='flex justify-center align-middle items-center mb-4'>
          <h3 className={'font-bold mr-2'}>Сумма перевода</h3>
          <div className='relative justify-center content-center items-center'>
            <input
              className='border bg-gray-50 max-w-[100px] border-gray-300 text-gray-900 focus:border-blue-500
                            focus:ring-blue-500 rounded-lg p-2.5 text-sm mr-2'
              value={amount}
              onChange={handleAmountValue}
            />
            <button
              onClick={() => setIsVisibleCalculator(!isVisibleCalculator)}
            >
              <FontAwesomeIcon icon={faKeyboard} />
            </button>
            {isVisibleCalculator && (
              <div className={'border bg-gray-100 p-2 absolute min-w-[250px]'}>
                <Calculator value={amount} setValue={handleValueCalculator} />
              </div>
            )}
          </div>

          <div className={'ml-2'}>
            <Button
              text={'Send'}
              handleButton={handleButtonTransfer}
              isDisable={!isDisableButton}
            />
          </div>
        </div>


      </div>
    </ClientLayout>
  );
};

export default TransfersPage;

// https://github.com/tuanpham-dev/calculator-react-typescript/blob/master/src/components/App/App.tsx

