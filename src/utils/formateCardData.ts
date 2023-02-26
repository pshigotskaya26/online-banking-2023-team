import { IClientUser } from '../types/interfaces/IUser';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const getStringCardNumber = (cardNumber: number) => {
  return (
    cardNumber
      .toString()
      .match(/.{1,4}/g)
      ?.join(' ') ?? ''
  );
};

export const getStringCardBalance = (cardBalance: number) => {
  return cardBalance.toString();
};

export const getCardUserById = (arrUsers: IClientUser[], idProps: number) => {
  return arrUsers.filter((user: IClientUser) => user.id === idProps)[0];
};

export const generateCardNumber = () => {
  let startStr = '';

  for (let i = 0; i < 15; i++) {
    let randomNumber = Math.floor(Math.random() * 10);

    startStr += randomNumber;
  }
  let firstFigure = randomInteger(1, 9);

  return Number(firstFigure.toString() + startStr.toString());
};

function randomInteger(min: number, max: number) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export const changeIconEyeInCard = (isShownValue: boolean) => {
  let iconEye = isShownValue ? faEye : faEyeSlash;
  return iconEye;
};

export const changeNumberToStar = (stringNumber: string) => {
  return `**** **** **** ${stringNumber.slice(-4)}`;
};

export const changeBalanceToStar = (stringNumber: string) => {
  return '*'.repeat(stringNumber.length);
};

export const changeCardNumber = (
  isShownValue: boolean,
  stringNumber: string,
) => {
  if (isShownValue) {
    return stringNumber;
  } else {
    return changeNumberToStar(stringNumber);
  }
};

export const changeCardBalance = (
  isShownValue: boolean,
  stringNumber: string,
) => {
  if (isShownValue) {
    return stringNumber;
  } else {
    return changeBalanceToStar(stringNumber);
  }
};
