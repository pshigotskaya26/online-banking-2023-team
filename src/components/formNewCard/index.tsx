import React, {useState} from 'react';
import './index.css';
import CardCurrencyEnum from "../../types/enums/CardCurrencyEnum";
import CardExpiryDateEnum from '../../types/enums/CardExpiryDateEnum';
import OptionItemCurrency from "../optionItemCurrency";
import OptionItemExpiration from '../optionItemExpiration';

const FormNewCard: React.FC = () => {
	const [currency, setCurrency] = useState<string>(CardCurrencyEnum.USD);
	const [expiration, setExpiration] = useState<string>(CardExpiryDateEnum.year_1);

	const changeCurrency =(newCurrency: string): void => {
		setCurrency(newCurrency);
	};

	const changeExpiration =(newExpiration: string): void => {
		setExpiration(newExpiration);
	};

	const handleSelectCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
		changeCurrency(event.target.value);
	}

	const handleSelectExpiration = (event: React.ChangeEvent<HTMLSelectElement>) => {
			changeExpiration(event.target.value);
	}

	return (
			<div className="new-card__form">
				<form>
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
								<div className='card-data__bg'>3</div>
							</div>
							<div className='new-card__view-card'></div>
						</div>
						<div className='new-card__buttons'>
							<input type="submit" value="Create new card" />
							<button>Cancel</button>
						</div>
					</div>
					{/*<input className="input-create-card" type="submit" onClick={handleCreateNewCard} />*/}
				</form>
			</div>
	);
};

export default FormNewCard;