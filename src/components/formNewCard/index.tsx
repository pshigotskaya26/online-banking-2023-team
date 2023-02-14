import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import CardCurrencyEnum from '../../types/enums/CardCurrencyEnum';
import CardExpiryDateEnum from '../../types/enums/CardExpiryDateEnum';
import CardBackgroundEnum from '../../types/enums/CardBackgroundEnum';
import CardItem from '../cardItem';
import ICard from '../../types/interfaces/ICard';
import { generateCardNumber } from '../../utils/formateCardData';
import dayjs from 'dayjs';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useActions } from '../../hooks/useActions';

const FormNewCard: React.FC = () => {
  const { user } = useAppSelector((state) => state.authuser);
  console.log('user: ', user);
  const [currency, setCurrency] = useState<string>(CardCurrencyEnum.USD);
  const [expiration, setExpiration] = useState<string>(
    CardExpiryDateEnum.ONE_YEAR,
  );
  const [background, setBackground] = useState<string>(CardBackgroundEnum.blue);
  const navigate = useNavigate();

  const objNewCard = {
    id: 0,
    number: generateCardNumber(),
    expired: dayjs().add(parseInt(expiration), 'year').unix(),
    currency: currency,
    account: 'BY134678484000000154501',
    userid: user?.id ?? 0,
    balance: 0,
    background: background,
    isShown: true,
  };

  const { addUserCard } = useActions();

  const changeCards = (newCard: ICard = objNewCard) => {
    addUserCard(newCard);
    navigate('/dashboard');
  };

  const handleSelectCurrency = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setCurrency(event.target.value);
  };

  const handleSelectExpiration = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setExpiration(event.target.value);
  };

  const handleSelectBackground = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setBackground(event.target.value);
  };

  return (
    <div className="new-card__form">
      <h5 className="mb-5 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Add a new card:
      </h5>
      <div className="new-card__container">
        <div className="new-card__content">
          <div className="new-card__card-data">
            <div className="card-data__currency">
              <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white">
                Select a currency type:
              </p>
              <select
                onChange={handleSelectCurrency}
                className="select-currency"
                size={Object.keys(CardCurrencyEnum).length}
                value={currency}
              >
                {Object.keys(CardCurrencyEnum).map((item: string) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="card-data__expiration">
              <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white">
                Select a card expiration date:
              </p>
              <select
                onChange={handleSelectExpiration}
                className="select-expiration"
                size={Object.values(CardExpiryDateEnum).length}
                value={expiration}
              >
                {Object.values(CardExpiryDateEnum).map((item: string) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="card-data__bg">
              <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white">
                Select background for card:
              </p>
              <select
                onChange={handleSelectBackground}
                className="select-background"
                size={Object.keys(CardBackgroundEnum).length}
                value={background}
              >
                {Object.keys(CardBackgroundEnum).map((item: string) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="new-card__view-card">
            <p className="mb-4 text-sm font-medium text-gray-900 dark:text-white">
              A view of our card:
            </p>
            <CardItem card={objNewCard} />
          </div>
        </div>
        <div className="new-card__buttons">
          <input
            className="button button-create-card"
            type="submit"
            onClick={(event) => {
              changeCards();
            }}
            value="Create new card"
          />
          <button className="button button-cancel">
            <Link to={'/dashboard'}>Cancel</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormNewCard;
