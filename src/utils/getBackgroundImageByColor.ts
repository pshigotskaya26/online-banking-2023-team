import imgBlue from '../assets/cardBackground/card-bg-blue.png';
import imgGreen from '../assets/cardBackground/card-bg-green.png';
import imgOrange from '../assets/cardBackground/card-bg-orange.png';
import imgViolett from '../assets/cardBackground/card-bg-violett.png';
import imgRed from '../assets/cardBackground/card-bg-red.png';
import CardBackgroundEnum from '../types/enums/CardBackgroundEnum';

export const getBackgroundImageByColor = (cardBackground: string) => {
  switch (cardBackground) {
    case CardBackgroundEnum.blue:
      return imgBlue;
    case CardBackgroundEnum.green:
      return imgGreen;
    case CardBackgroundEnum.orange:
      return imgOrange;
    case CardBackgroundEnum.violett:
      return imgViolett;
    default:
      return imgRed;
  }
};
