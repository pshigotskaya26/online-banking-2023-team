import SelectCard from '../selectCard';
import Message from '../message';
import { TypeMessage } from '../../types/enums/TypeMessage';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import ICard from '../../types/interfaces/ICard';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Calculator from '../calculator';
import { ITransferData } from '../../types/interfaces/ITransaction';
import Button from '../button';
import SelectCardTo from '../selectCardTo';
import recipientsViewEnum from '../../types/enums/recipientsViewEnum';

interface FormTransferProps {
  cards: ICard[];
  idUser?: number,
  handleTransfer: (data: ITransferData) => void;
}

const FormTransfer: FC<FormTransferProps> = ({ cards, handleTransfer, idUser }) => {
  const { cardTo } = useAppSelector(state => state.transfers);
  const { getCardInfo, fetchCardsByUserId } = useActions();

  const [isSimilarCards, setIsSimilarCards] = useState<boolean>(false);

  const [activeCardFrom, setActiveCardFrom] = useState<ICard>({} as ICard);
  const [viewRecipient, setViewRecipient] = useState<recipientsViewEnum | null>(null);
  const [numberCardTo, setNUmberCardTo] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  const [isVisibleCalculator, setIsVisibleCalculator] = useState<boolean>(false);


  useEffect(() => {
    if (idUser) {
      fetchCardsByUserId(idUser);
    }
  }, []);

  useEffect(() => {
    setActiveCardFrom(cards[0]);
  }, [cards]);

  useEffect(() => {
    if (activeCardFrom?.number === numberCardTo) {
      setIsSimilarCards(true);
    } else {
      setIsSimilarCards(false);
    }
  }, [activeCardFrom, numberCardTo]);

  const handleNumberCardTo = (n: number) => {
    setNUmberCardTo(n);

    if (n.toString().length === 16) {
      getCardInfo(n);
    }
  };

  const handleAmountValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

  const handleValueCalculator = (n: number) => {
    setAmount(n);
    setIsVisibleCalculator(false);
  };

  const isDisableButton =
    activeCardFrom?.number?.toString().length === 16 &&
    cardTo?.number.toString().length === 16 &&
    amount !== 0 &&
    !isSimilarCards;

  const handleButtonTransfer = () => {
    const transferData: ITransferData = {
      cardFrom: activeCardFrom.number,
      cardTo: numberCardTo,
      amountFrom: amount,
    };
    handleTransfer(transferData);
  };

  return <>
    <div className={'flex justify-evenly mb-12'}>
      <div>
        <h2 className='font-light mb-2 font-bold '>
          Select sender's card
        </h2>
        <SelectCard cards={cards} activeCardData={activeCardFrom} setActiveCard={setActiveCardFrom} />
      </div>
      <div>
        <h2 className='font-light mb-2 font-bold '>
          {viewRecipient !== null && <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            onClick={() => setViewRecipient(null) }
            className={"mr-1 cursor-pointer"}
          />}
          Enter recipient's card
        </h2>
        <SelectCardTo
          cards={cards}
          cardTo={cardTo}
          numberCardTo={numberCardTo}
          handleNumberCardTo={handleNumberCardTo}
          viewRecipient={viewRecipient}
          setViewRecipient={setViewRecipient}
        />
      </div>
    </div>

    {isSimilarCards && <Message type={TypeMessage.WARNING} text={'Identical cards'} />}

    {(cardTo?.currency !== activeCardFrom?.currency && cardTo) &&
      <Message type={TypeMessage.WARNING} text={'The transfer will be made at the rate of the bank'} />
    }
    <div className='flex justify-center align-middle items-center mb-4'>
      <h3 className={'font-bold mr-2'}>Amount</h3>
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
            <Calculator value={amount}
                        setValue={handleValueCalculator}
                        closeCalculator={() => setIsVisibleCalculator(false)}
            />
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
  </>;
};

export default FormTransfer;