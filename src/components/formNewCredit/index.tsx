import './index.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import CreditTermEnum from '../../types/enums/CreditTermEnum';
import CreditThingEnum from '../../types/enums/CreditThingEnum';
import CreditSumEnum from '../../types/enums/CreditSumEnum';
import { useActions } from '../../hooks/useActions';
import ICard from '../../types/interfaces/ICard';
import ICredit from '../../types/interfaces/ICredit';
import { createCreditPayments } from '../../utils/createCreditPayments';
import CreditStatusEnum from '../../types/enums/CreditStatusEnum';
import CreditPaymentFineEnum from '../../types/enums/CreditPaymentFineEnum';

const FormNewCredit: React.FC = () => {
  const { user } = useAppSelector((state) => state.authuser);
  console.log('user: ', user);
  const { cards: userCards } = useAppSelector((state) => state.usercards);

  const [cards, setCards] = useState<ICard[]>([]);
  const [creditTerm, setCreditTerm] = useState<string>(CreditTermEnum.TEN_DAYS);
  const [creditThing, setCreditThing] = useState<string>(
    CreditThingEnum.BICYCLE,
  );
  const [creditSum, setCreditSum] = useState<string>(CreditSumEnum.SUM_10000);
  const [creditCardId, setCreditCardId] = useState<number>(0);

  useEffect(() => {
    setCards(userCards);
  }, [userCards]);

  const navigate = useNavigate();

  const objNewCredit = {
    id: 0,
    summOfCredit: Number(creditSum),
    entity: creditThing,
    term: Number(creditTerm),
    dateStart: Date.now(),
    dateOfTheLastPayment: null,
    summPaid: 0,
    remainder: Number(creditSum),
    fine: Number(CreditPaymentFineEnum.ZERO),
    userId: user?.id ?? 0,
    isAllPaid: false,
    status: CreditStatusEnum.OPEN,
    arrOfPayments: createCreditPayments(
      Number(creditTerm),
      Date.now(),
      Number(creditSum),
    ),
    cardId: creditCardId,
  };

  const { addUserCredit } = useActions();

  const changeCredits = (newCredit: ICredit = objNewCredit) => {
    addUserCredit(newCredit);
    navigate('/my-credits');
  };

  const handleSelectThing = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCreditThing(event.target.value);
  };

  const handleSelectSum = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCreditSum(event.target.value);
  };

  const handleSelectTerm = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCreditTerm(event.target.value);
  };

  const handleSelectCardId = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCreditCardId(Number(event.target.value));
  };

  return (
    <div className="new-credit__form">
      <h4 className="mb-5 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Take a new credit:
      </h4>
      <div className="new-credit__container">
        <div className="new-credit__content">
          <div className="new-credit__user-data w-1/5">
            <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white h-8">
              Your name / surname:{' '}
            </p>
            <p className="user-data__value">{user?.name}</p>
          </div>

          <div className="new-credit__entity w-1/5">
            <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white h-8">
              Select a thing you want to take in credit:
            </p>
            <select
              onChange={handleSelectThing}
              className="select-thing w-full"
              size={Object.keys(CreditThingEnum).length}
              value={creditThing}
            >
              {Object.keys(CreditThingEnum).map((item: string) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="new-credit__summ w-1/5">
            <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white h-8">
              Enter sum you want to take in credit (BYN):
            </p>
            <select
              onChange={handleSelectSum}
              className="select-sum w-full"
              size={Object.values(CreditSumEnum).length}
              value={creditSum}
            >
              {Object.values(CreditSumEnum).map((item: string) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="new-credit__term w-1/5">
            <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white h-8">
              Select a term of the credit (DAYS):
            </p>
            <select
              onChange={handleSelectTerm}
              className="select-term w-full"
              size={Object.values(CreditTermEnum).length}
              value={creditTerm}
            >
              {Object.values(CreditTermEnum).map((item: string) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="new-credit__CardId w-1/5">
            <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white h-8">
              Select a card:
            </p>
            <select
              onChange={handleSelectCardId}
              className="select-card w-full"
              size={cards.length}
              value={creditCardId}
            >
              {cards.map((cardItem: ICard) => (
                <option key={cardItem.id} value={cardItem.id}>
                  {cardItem.number} ({cardItem.currency})
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="new-credit__buttons">
          <input
            className="button button-create-credit"
            type="submit"
            onClick={(event) => {
              changeCredits();
            }}
            value="Create a new credit"
          />
          <button className="button button-cancel">
            <Link to={'/dashboard'}>Cancel</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormNewCredit;
