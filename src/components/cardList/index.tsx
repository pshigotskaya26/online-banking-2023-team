import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import ICard from '../../types/interfaces/ICard';
import ICredit from '../../types/interfaces/ICredit';
import CardItem from '../cardItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import { toggleActiveCreditButton } from '../../utils/toggleActiveCreditButton';
import { toggleActiveMyCreditsButton } from '../../utils/toggleActiveMyCreditsButton';

interface CardListProps {
  credits: ICredit[];
  cards: ICard[];
}

const CardList: React.FC<CardListProps> = (props) => {
  const { user } = useAppSelector((state) => state.authuser);
  const { cards: userCards } = useAppSelector((state) => state.usercards);
  const { credits: userCredits } = useAppSelector((state) => state.usercredits);

  const { getCardsByUserId } = useActions();
  const { getCreditsByUserId } = useActions();
  const [cards, setCards] = useState<ICard[]>(props.cards);
  const [credits, setCredits] = useState<ICredit[]>(props.credits);

  useEffect(() => {
    setCards(userCards);
  }, [userCards]);

  useEffect(() => {
    setCredits(userCredits);
  }, [userCredits]);

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

  if (props.cards.length) {
    toggleActiveCreditButton(true);
  } else {
    toggleActiveCreditButton(false);
  }

  if (props.credits.length) {
    toggleActiveMyCreditsButton(true);
  } else {
    toggleActiveMyCreditsButton(false);
  }

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
