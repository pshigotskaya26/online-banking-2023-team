import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import ICard from '../../types/interfaces/ICard';
import CardItem from '../cardItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';

interface CardListProps {}

const CardList: React.FC<CardListProps> = (props) => {
  const { user } = useAppSelector((state) => state.authuser);
  const { cards: userCards } = useAppSelector((state) => state.usercards);

  const { getCardsByUserId } = useActions();
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    if (user !== null) {
      getCardsByUserId(user.id);
    }
  }, [user]);

  useEffect(() => {
    setCards(userCards);
  }, [userCards]);

  return (
    <div className="cardList-container">
      <h2 className="cardList__title">Card list:</h2>
      <div className="cardList__content">
        {cards.map((cardItem: ICard) => (
          <CardItem key={cardItem.id} card={cardItem} />
        ))}
      </div>
      <div className="cardList__button">
        <button className="button button-add">
          <Link to={'/new-card'}>Add card</Link>
        </button>
      </div>
    </div>
  );
};

export default CardList;
