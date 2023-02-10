import React, { ChangeEvent, useState } from 'react';
import Button from '../button';

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

enum CardBackgroundEnum {
  blue = 'blue',
  green = 'green',
  orange = 'orange',
  violett = 'violett',
  red = 'red',
}

interface SelectCardProps {
  cards: ICard[];
}

const SelectCard: React.FC<SelectCardProps> = ({ cards }) => {
  const [activeCard, setActiveCard] = useState<ICard | null>(null);
  const [background, setBackground] = useState<string>(CardBackgroundEnum.blue);

  const handleActiveCard = (e: ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    const selectedCard = cards.find((el) => el.id === Number(id));
    setActiveCard(selectedCard ? selectedCard : null);
  };

  return (
    <div className="w-96 h-56 bg-gray-100 rounded-xl relative shadow transition-transform transform hover:scale-105">
      <div className="w-full px-8 absolute top-8">
        <div className="pt-1">
          {!cards.length ? (
            <div>
              <div>Карт нет</div>
              <Button
                text={'Create'}
                handleButton={() => console.log('создать карту')}
                isDisable={false}
              />
            </div>
          ) : (
            <>
              <h2 className="font-light mb-2 font-bold ">
                Выбрать карту отправителя
              </h2>
              <div className="flex justify-center">
                <select
                  id="countries"
                  onChange={handleActiveCard}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {cards.map((card) => {
                    return (
                      <option value={card.id}>
                        <div className={'w-24 h-24 bg-blue-600'}></div>
                        {card.number}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>Currency: {activeCard?.currency}</div>
              <div>Balance: {activeCard?.balance}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
