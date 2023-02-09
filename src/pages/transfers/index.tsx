import PageTitle from '../../components/pageTitle';
import ClientLayout from '../../layouts/client';
import { useState } from 'react';
import Button from '../../components/button';
import Calculator from '../../components/calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import CardCurrencyEnum from '../../types/enums/CardCurrencyEnum';
// import ICard from '../../types/interfaces/ICard';
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
  // https://github.com/tuanpham-dev/calculator-react-typescript/blob/master/src/components/App/App.tsx
  const cards: ICard[] = [
    {
      id: 1,
      number: 5454123412341234,
      expired: Date.now(),
      currency: CardCurrencyEnum.BYN,
      account: "IBAN BY134678484000000154501",
      userid: 1,
      balance: 200,
      background: "",
      isShown: false
    },
    {
      id: 2,
      number: 5454123412341234,
      expired: Date.now(),
      currency: CardCurrencyEnum.USD,
      account: "IBAN BY134678484000000154501",
      userid: 1,
      balance: 200,
      background: "",
      isShown: false
    },
  ]

  const [isVisibleCalculator, setIsVisibleCalculator] = useState<boolean>(false);
  // FROM
  const [numberCardFrom, setNUmberCardFrom] = useState<number>(0);

  // TO
  const [numberCardTo, setNUmberCardTo] = useState<number>(0);

  // sum
  const [sum, setSum] = useState<number>(0);

  const handleButtonTransfer = () => {
    console.log(numberCardFrom);
    console.log(numberCardTo);
    console.log(sum);


    // Валидация значений номеров карт // дисейбл кнопки
    // Проверить остаток на карте
    // Если существует такая карта , то перевод
    // Иначе выдать ошибку
  };

  const handleValueCalculator = (n: number) => {
    setSum(n);
    setIsVisibleCalculator(false);
  };


  return <ClientLayout>
    <PageTitle title={'Transfers from card to card'}
               description={'Online service for money transfers from card to card of any bank'} />
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className={'flex justify-evenly mb-12'}>
        <div>
          <div
            className='w-96 h-56 bg-gray-300 rounded-xl relative shadow transition-transform transform hover:scale-105'>
            <div className='w-full px-8 absolute top-8'>
              <div className='pt-1'>
                <h2 className='font-light mb-2 font-bold '>
                  Выбрать карту отправителя
                </h2>
                <div className='flex justify-center'>
                  <div className='mb-3 xl:w-96'>
                    <select className='form-select appearance-none block w-full px-3 py-1.5 text-base
                                        font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid
                                        border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white
                                        focus:border-blue-600 focus:outline-none' aria-label='Default select example'>
                      <option selected>Open this select menu</option>
                      <option value='1'>One</option>
                      <option value='2'>Two</option>
                      <option value='3'>Three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className='w-96 h-56 m-auto bg-gray-300 rounded-xl relative shadow transition-transform transform hover:scale-105'>
            <div className='w-full px-8 absolute top-8'>
              <div className='pt-1'>
                <h2 className='font-light mb-2 font-bold '>
                  Введите карту получателя
                </h2>
                <div className='flex justify-center'>
                  <div className='mb-3 xl:w-96'>
                    <input type='text' placeholder={'XXXX XXXX XXXX XXXX'} className={'w-full p-2 text-xl'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center align-middle items-center mb-4'>
        <h3 className={'font-bold mr-2'}>Сумма перевода</h3>
        <div className='relative justify-center content-center items-center'>
          <input className='border bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500
                            focus:ring-blue-500 rounded-lg p-2.5 text-sm' value={sum}
                 onChange={(e) => setSum(+e.target.value)}
                 id='amount' type='number' />
          <button onClick={() => setIsVisibleCalculator(!isVisibleCalculator)}>
            <FontAwesomeIcon icon={faKeyboard} />
          </button>
          {isVisibleCalculator && <div className={'border bg-gray-100 p-2 absolute min-w-[320px]'}>
            <Calculator value={sum} setValue={handleValueCalculator} />
          </div>}

        </div>

        <div className={'ml-2'}>
          <Button text={'Send'} handleButton={() => console.log('value')} isDisable={false} />
        </div>
      </div>
      <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
           role='alert'>
        Danger alert! Change a few things up and try submitting again.
      </div>
    </div>

  </ClientLayout>;
};

export default TransfersPage;