import './style.css';
import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faMagnifyingGlass,
  faUsers,
  faMagicWandSparkles,
} from '@fortawesome/free-solid-svg-icons';

interface TabsProps {
  callback: (tabName: string) => void;
}

export const Tabs: FC<TabsProps> = ({ callback }) => {
  const [selected, setSelected] = useState();

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <button className="tab-active">
            <FontAwesomeIcon icon={faStar} /> Favorite
          </button>
        </li>
        <li className="mr-2">
          <button className="tab-regular">
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Simple
          </button>
        </li>
        <li className="mr-2">
          <button className="tab-regular">
            <FontAwesomeIcon icon={faUsers} /> Popular
          </button>
        </li>
        <li>
          <button className="tab-regular">
            <FontAwesomeIcon icon={faMagicWandSparkles} /> AutoPayments
          </button>
        </li>
      </ul>
    </div>
  );
};
