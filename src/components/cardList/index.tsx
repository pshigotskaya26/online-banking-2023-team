import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ICard from '../../types/interfaces/ICard';
import ICredit from '../../types/interfaces/ICredit';
import CardItem from '../cardItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';

interface CardListProps {
  credits: ICredit[];
  cards: ICard[];
}

const CardList: React.FC<CardListProps> = ({ cards, credits }) => {
  const { user } = useAppSelector((state) => state.authuser);

  const { getCardsByUserId } = useActions();
  const { getCreditsByUserId } = useActions();

  useEffect(() => {
    if (user !== null) {
      getCardsByUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    if (user !== null) {
      getCreditsByUserId(user.id, cards);
    }
  }, [user]);

  return (
    <div className="cardList-container">
      <div className="cardList__head">
        <h2 className="cardList__title">Card list:</h2>
        <div className="cardList__buttons">
          <Link to={'/new-card'}>
            <button className="button button-add">Add card</button>
          </Link>
          <Link
            to={'/take-credit'}
            className={cards.length === 0 ? 'pointer-events-none' : ''}
          >
            <button className={`button button-take-credit`}>
              Take a credit
            </button>
          </Link>
          <Link
            to={'/my-credits'}
            className={credits.length === 0 ? 'pointer-events-none' : ''}
          >
            <button className={`button button-my-credits`}>My credits</button>
          </Link>
        </div>
      </div>
      <div className="cardList__content">
        {cards.map((cardItem: ICard) => (
          <CardItem
            key={cardItem.id}
            card={cardItem}
            isReplenishAvailable={true}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
