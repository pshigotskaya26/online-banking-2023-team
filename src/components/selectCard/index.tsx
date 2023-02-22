import React, { ChangeEvent } from 'react';
import Button from '../button';
import { getBackgroundImageByColor } from '../../utils/getBackgroundImageByColor';
import { getStringCardNumber } from '../../utils/formateCardData';
import ICard from '../../types/interfaces/ICard';
import { useNavigate } from 'react-router-dom';

interface SelectCardProps {
  cards: ICard[];
  activeCardData: ICard;
  setActiveCard: (card: ICard) => void;
}

const SelectCard: React.FC<SelectCardProps> = ({
  cards,
  activeCardData,
  setActiveCard,
}) => {
  const imageBackground = getBackgroundImageByColor(
    activeCardData?.background || '',
  );
  const navigate = useNavigate();
  const handleActiveCard = (e: ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    const selectedCard = cards.find((el) => el.id === Number(id));
    if (selectedCard) {
      setActiveCard(selectedCard);
    }
  };

  return (
    <div
      className="card-item bg-gray-100 relative shadow transition-transform transform hover:scale-105"
      style={
        activeCardData?.background
          ? { background: `url(${imageBackground})` }
          : {}
      }
    >
      <div className="w-full px-8 absolute top-8">
        <div className="pt-1">
          {!cards.length ? (
            <div>
              <div className={'text-black'}>Карт нет</div>
              <Button
                text={'Create'}
                handleButton={() => navigate('/new-card')}
                isDisable={false}
              />
            </div>
          ) : (
            <>
              <div className="flex justify-center mt-20">
                <select
                  id="countries"
                  onChange={handleActiveCard}
                  className="bg-gray-50 border bg-opacity-60 text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={activeCardData.id}
                >
                  {cards.map((card) => {
                    return (
                      <option value={card.id} key={card.id}>
                        {getStringCardNumber(card.number)} [{card.currency}]
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className={'mt-2'}>
                Balance:
                <span className={'font-medium'}> {activeCardData.balance}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
