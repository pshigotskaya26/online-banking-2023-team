import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './index.css';
import CardCurrencyEnum from "../../types/enums/CardCurrencyEnum";
import CardExpiryDateEnum from '../../types/enums/CardExpiryDateEnum';
import CardBackgroundEnum from '../../types/enums/CardBackgroundEnum';
import OptionItemCurrency from "../optionItemCurrency";
import OptionItemExpiration from '../optionItemExpiration';
import OptionItemBackground from '../optionItemBackground';
import CardItem from '../cardItem';
import cardsData from '../../data/cards';
import ICard from '../../types/interfaces/ICard';
import { generateCardNumber } from "../../utils/formateCardData";

const FormNewCard: React.FC = () => {
	const [cards, setCards] = useState<ICard[]>(cardsData);
	const [currency, setCurrency] = useState<string>(CardCurrencyEnum.USD);
	const [expiration, setExpiration] = useState<string>(CardExpiryDateEnum.year_1);
	const [background, setBackground] = useState<string>(CardBackgroundEnum.blue);
	const navigate = useNavigate();
	
	let startBalance = 0;

	const objNewCard = {
		id: cardsData.length + 1,
		number: generateCardNumber(),
		expired: Date.now() + Number(expiration) * 31622400000,
		currency: currency,
		account: 'BY134678484000000154501',
		userid: 1,
		balance: startBalance,
		background: background,
		isShown: true
	};

	const changeCurrency =(newCurrency: string): void => {
		setCurrency(newCurrency);
	};

	const changeExpiration =(newExpiration: string): void => {
		setExpiration(newExpiration);
	};

	const changeBackground =(newBackground: string): void => {
		setBackground(newBackground);
	};

	const changeCards = (NewCard: ICard = objNewCard) => {
		cards.push(NewCard);
		setCards(cards);
		navigate('/dashboard');
	};

	const handleSelectCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
		changeCurrency(event.target.value);
	}

	const handleSelectExpiration = (event: React.ChangeEvent<HTMLSelectElement>) => {
			changeExpiration(event.target.value);
	}

	const handleSelectBackground = (event: React.ChangeEvent<HTMLSelectElement>) => {
		changeBackground(event.target.value);
}

	return (
			<div className="new-card__form">
				
					<h5 className="mb-5 text-base font-semibold text-gray-900 md:text-xl dark:text-white">Add a new card:</h5>
					<div className='new-card__container'>
						<div className='new-card__content'>
							<div className='new-card__card-data'>
								<div className='card-data__currency'>
									<p className='mb-4 text-sm font-medium text-gray-900 dark:text-white'>Select a currency type:</p>
									<select onChange={handleSelectCurrency} className='select-currency' size={Object.keys(CardCurrencyEnum).length} value={currency}>
										{(Object.keys(CardCurrencyEnum)).map((optionItem: string) => (
											<OptionItemCurrency key={optionItem} value={optionItem} />
										))}
									</select>
								</div>
								<div className='card-data__expiration'>
									<p className='mb-4 text-sm font-medium text-gray-900 dark:text-white'>Select a card expiration date:</p>
									<select onChange={handleSelectExpiration} className='select-expiration' size={Object.values(CardExpiryDateEnum).length} value={expiration}>
										{(Object.values(CardExpiryDateEnum)).map((optionItem: string) => (
											<OptionItemExpiration key={optionItem} value={optionItem} />
										))}
									</select>
								</div>
								<div className='card-data__bg'>
									<p className='mb-4 text-sm font-medium text-gray-900 dark:text-white'>Select background for card:</p>
									<select onChange={handleSelectBackground} className='select-background' size={Object.keys(CardBackgroundEnum).length} value={background}>
										{(Object.keys(CardBackgroundEnum)).map((optionItem: string) => (
											<OptionItemBackground key={optionItem} value={optionItem} />
										))}
									</select>
								</div>
							</div>
							<div className='new-card__view-card'>
								<p className='mb-4 text-sm font-medium text-gray-900 dark:text-white'>A view of our card:</p>
								<CardItem card={objNewCard} />
							</div>
						</div>
						<div className='new-card__buttons'>
							<input className='button button-create-card' type="submit" onClick={(event)=> {changeCards()}} value="Create new card" />
							<button className='button button-cancel'><Link to={'/dashboard'}>Cancel</Link></button>
						</div>
					</div>
				
			</div>
	);
};

export default FormNewCard;