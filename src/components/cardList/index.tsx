import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ICard from '../../types/interfaces/ICard';
import ICredit from '../../types/interfaces/ICredit';
import CardItem from '../cardItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import { toggleActiveCreditButton } from '../../utils/toggleActiveCreditButton';
import { toggleActiveMyCreditsButton } from '../../utils/toggleActiveMyCreditsButton';

interface CardListProps {}

const CardList: React.FC<CardListProps> = (props) => {
  const { user } = useAppSelector((state) => state.authuser);
  const { cards: userCards } = useAppSelector((state) => state.usercards);
  const { credits: userCredits } = useAppSelector((state) => state.usercredits);

  const { getCardsByUserId } = useActions();
  const { getCreditsByUserId } = useActions();
  const [cards, setCards] = useState<ICard[]>([]);
  const [credits, setCredits] = useState<ICredit[]>([]);

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

  useEffect(() => {
    setCards(userCards);
  }, [userCards]);

  useEffect(() => {
    setCredits(userCredits);
  }, [userCredits]);

  if (cards.length) {
    toggleActiveCreditButton(true);
  } else {
    toggleActiveCreditButton(false);
  }

  if (credits.length) {
    toggleActiveMyCreditsButton(true);
  } else {
    toggleActiveMyCreditsButton(false);
  }

  console.log('cards in cardList: ', cards);

  console.log('credits in CardList: ', credits.length);

  return (
    <div className="cardList-container">
      <div className="cardList__head">
        <h2 className="cardList__title">Card list:</h2>
        <div className="cardList__buttons">
          <button className="button button-add">
            <Link to={'/new-card'}>Add card</Link>
          </button>
          <button className="button button-take-credit">
            <Link to={'/take-credit'}>Take a credit</Link>
          </button>

          <button className="button button-my-credits">
            <Link to={'/my-credits'}>My credits</Link>
          </button>
        </div>
      </div>
      <div className="cardList__content">
        {cards.map((cardItem: ICard) => (
          <CardItem key={cardItem.id} card={cardItem} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
