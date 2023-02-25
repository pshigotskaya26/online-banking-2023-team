import './index.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';
import ICredit from '../../types/interfaces/ICredit';
import CreditItem from '../creditItem';
import ICard from '../../types/interfaces/ICard';

const CreditList = () => {
  const { user } = useAppSelector((state) => state.authuser);
  const { credits: userCredits } = useAppSelector((state) => state.usercredits);
  const { cards: userCards } = useAppSelector((state) => state.usercards);
  const { getCardsByUserId } = useActions();
  const { getCreditsByUserId } = useActions();
  const [cards, setCards] = useState<ICard[]>([]);
  const [credits, setCredits] = useState<ICredit[]>([]);

  console.log('credits: ', credits);
  console.log('cards: ', cards);

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
