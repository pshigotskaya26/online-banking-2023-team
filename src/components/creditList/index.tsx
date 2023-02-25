import React, { useEffect, useState } from 'react';
import './index.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import ICredit from '../../types/interfaces/ICredit';
import CreditItem from '../creditItem';
import ICard from '../../types/interfaces/ICard';

interface CreditListProps {
  credits: ICredit[];
  cards: ICard[];
}

const CreditList: React.FC<CreditListProps> = (props) => {
  const { user } = useAppSelector((state) => state.authuser);
  const { credits: userCredits } = useAppSelector((state) => state.usercredits);
  const { cards: userCards } = useAppSelector((state) => state.usercards);
  const { getCardsByUserId } = useActions();
  const { getCreditsByUserId } = useActions();
  const [cards, setCards] = useState<ICard[]>(props.cards);
  const [credits, setCredits] = useState<ICredit[]>(props.credits);

  //console.log('credits: ', credits);
  //console.log('cards: ', cards);

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
    setCredits(userCredits);
  }, [userCredits]);

  useEffect(() => {
    setCards(userCards);
  }, [userCards]);

  return (
    <div className="creditList-container">
      <h3 className="creditList__title">My credits list:</h3>
      <div className="creditList__content">
        {credits.map((creditItem: ICredit) => (
          <CreditItem
            id={creditItem.id}
            key={creditItem.id}
            credits={credits}
            credit={creditItem}
            cards={cards}
          />
        ))}
      </div>
    </div>
  );
};

export default CreditList;
