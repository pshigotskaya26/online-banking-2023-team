import Button from '../button';
import SelectCard from '../selectCard';
import InputCard from '../inputCard';
import React, { FC, useState } from 'react';
import ICard from '../../types/interfaces/ICard';
import recipientsViewEnum from '../../types/enums/recipientsViewEnum';

interface SelectCardToProps {
  cards: ICard[];
  numberCardTo: number,
  handleNumberCardTo: (n: number) => void
  cardTo: ICard | null;
  viewRecipient: null | recipientsViewEnum,
  setViewRecipient: (v: recipientsViewEnum | null) => void
}

const SelectCardTo: FC<SelectCardToProps> = ({
                                               cards,
                                               numberCardTo,
                                               handleNumberCardTo,
                                               cardTo,
                                               setViewRecipient,
                                               viewRecipient,
                                             }) => {

  const [activeCardTo, setActiveCardTo] = useState<ICard>(cards[1]);

  const handleActiveCardTo = (card: ICard) => {
    setActiveCardTo(card);
    handleNumberCardTo(card.number);
  };

  return <>
    {
      viewRecipient === null && <div
        className={'w-[340px] h-[213px] m-auto bg-gray-100 rounded-xl relative text-center pt-14 shadow transition-transform transform hover:scale-105'}>
        <div>
          <Button
            text={'Your card'}
            handleButton={() => setViewRecipient(recipientsViewEnum.YOUR_CARD)}
            isDisable={cards.length <= 1}></Button>
        </div>
        <div>
          <Button text={'Another card'}
                  handleButton={() => setViewRecipient(recipientsViewEnum.ANOTHER_CARD)}
                  isDisable={!cards.length}></Button>
        </div>
      </div>
    }

    {
      viewRecipient === recipientsViewEnum.YOUR_CARD &&
      <SelectCard cards={cards} activeCardData={activeCardTo} setActiveCard={handleActiveCardTo} />
    }

    {
      viewRecipient === recipientsViewEnum.ANOTHER_CARD &&
      <InputCard value={numberCardTo} handleInputValue={handleNumberCardTo} canTransfer={!!(cardTo?.number)} />
    }

  </>;
};

export default SelectCardTo;