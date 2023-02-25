import { FC } from 'react';
import IService from '../../../../types/interfaces/IService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface PaymentListProps {
  services: IService[];
}

export const PaymentList: FC<PaymentListProps> = ({ services }) => {
  if (services.length === 0) {
    return <div className={'p-3 '}>There is no services for display.</div>;
  }

  return (
    <ul>
      {services.map((service) => (
        <li
          key={service.id}
          className={`my-3 bg-blue-200 rounded-2xl ${
            service.isAvailable ? '' : 'opacity-50'
          }`}
        >
          <Link
            to={`${service.code}`}
            className={`flex p-3 ${
              service.isAvailable ? 'cursor-pointer' : 'pointer-events-none'
            }`}
          >
            <div className={'mx-3 flex items-center justify-center w-1/12'}>
              {service.icon && (
                <FontAwesomeIcon
                  icon={service.icon}
                  size={'4x'}
                ></FontAwesomeIcon>
              )}
            </div>
            <div className={'mx-3 text-xl flex items-center'}>
              {service.title}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
