import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ICard from '../../types/interfaces/ICard';
import ICredit from '../../types/interfaces/ICredit';
import CardItem from '../cardItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';

interface CardListProps {}

const CardList: React.FC<CardListProps> = (props) => {
  const { user } = useAppSelector((state) => state.authuser);
  const { cards: userCards } = useAppSelector((state) => state.usercards);
  const { credits: userCredits } = useAppSelector((state) => state.usercredits);

  const { getCardsByUserId } = useActions();
  const [cards, setCards] = useState<ICard[]>([]);
  const [credits, setCredits] = useState<ICredit[]>([]);

  useEffect(() => {
    if (user !== null) {
      getCardsByUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    setCards(userCards);
  }, [userCards]);

  useEffect(() => {
    setCredits(userCredits);
  }, [userCredits]);

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
