import PageTitle from '../../components/pageTitle';
import ClientLayout from '../../layouts/client';
import { ChangeEvent, useState } from 'react';
import Button from '../../components/button';
import Calculator from '../../components/calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import CardCurrencyEnum from '../../types/enums/CardCurrencyEnum';
import SelectCard from '../../components/selectCard';
import InputCard from '../../components/inputCard';

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
  const cards: ICard[] = [
    {
      id: 2,
      number: 5454123412341234,
      expired: Date.now(),
      currency: CardCurrencyEnum.USD,
      account: 'IBAN BY134678484000000154501',
      userid: 1,
      balance: 200,
      background: 'green',
      isShown: false,
    },
    {
      id: 1,
      number: 5454123412341234,
      expired: Date.now(),
      currency: CardCurrencyEnum.BYN,
      account: 'IBAN BY134678484000000154501',
      userid: 1,
      balance: 200,
      background: 'blue',
      isShown: false,
    },

  ];


  const [isVisibleCalculator, setIsVisibleCalculator] = useState<boolean>(false);
  const [numberCardTo, setNUmberCardTo] = useState<number>(0);

  const [amount, setAmount] = useState<number>(0);
  const handleButtonTransfer = () => {
  };

  const handleValueCalculator = (n: number) => {
    setAmount(n);
    setIsVisibleCalculator(false);
  };

  const handleAmountValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

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
            <SelectCard cards={cards} />
          </div>
          <div>
            <h2 className='font-light mb-2 font-bold '>
              Введите карту получателя
            </h2>
            <InputCard value={numberCardTo} handleInputValue={setNUmberCardTo} />
          </div>
        </div>
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
              handleButton={() => console.log('value')}
              isDisable={false}
            />
          </div>
        </div>
        {/*<div*/}
        {/*  className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'*/}
        {/*  role='alert'*/}
        {/*>*/}
        {/*  Danger alert! Change a few things up and try submitting again.*/}
        {/*</div>*/}
      </div>
    </ClientLayout>
  );
};

export default TransfersPage;

// https://github.com/tuanpham-dev/calculator-react-typescript/blob/master/src/components/App/App.tsx

