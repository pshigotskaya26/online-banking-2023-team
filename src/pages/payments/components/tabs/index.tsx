import './style.css';
import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faMagnifyingGlass,
  faUsers,
  faMagicWandSparkles,
} from '@fortawesome/free-solid-svg-icons';
import PaymentTabsNamesEnum from '../../../../types/enums/PaymentTabsNamesEnum';
import { tab } from '@testing-library/user-event/dist/tab';

interface TabsProps {
  callback: (tabName: PaymentTabsNamesEnum) => void;
}

export const TabsPanel: FC<TabsProps> = ({ callback }) => {
  const [selected, setSelected] = useState(PaymentTabsNamesEnum.FAVORITE);

  const changeActiveTab = (tabName: PaymentTabsNamesEnum) => {
    setSelected(tabName);
    callback(tabName);
  };

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <button
            className={
              selected === PaymentTabsNamesEnum.FAVORITE
                ? 'tab-active'
                : 'tab-regular'
            }
            onClick={() => changeActiveTab(PaymentTabsNamesEnum.FAVORITE)}
          >
            <FontAwesomeIcon icon={faStar} /> Favorite
          </button>
        </li>
        <li className="mr-2">
          <button
            className={
              selected === PaymentTabsNamesEnum.SIMPLE
                ? 'tab-active'
                : 'tab-regular'
            }
            onClick={() => changeActiveTab(PaymentTabsNamesEnum.SIMPLE)}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Simple
          </button>
        </li>
        <li className="mr-2">
          <button
            className={
              selected === PaymentTabsNamesEnum.POPULAR
                ? 'tab-active'
                : 'tab-regular'
            }
            onClick={() => changeActiveTab(PaymentTabsNamesEnum.POPULAR)}
          >
            <FontAwesomeIcon icon={faUsers} /> Popular
          </button>
        </li>
        <li className="mr-2">
          <button
            className={
              selected === PaymentTabsNamesEnum.AUTO_PAUMENTS
                ? 'tab-active'
                : 'tab-regular'
            }
            onClick={() => changeActiveTab(PaymentTabsNamesEnum.AUTO_PAUMENTS)}
          >
            <FontAwesomeIcon icon={faMagicWandSparkles} /> AutoPayments
          </button>
        </li>
      </ul>
    </div>
  );
};
