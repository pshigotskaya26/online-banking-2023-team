import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconLookup } from '@fortawesome/fontawesome-svg-core';

interface FormTransferResultProps {
  text: string,
  icon: IconLookup,
  description?: string
  handlerResult: () => void
}

const FormTransferResult: FC<FormTransferResultProps> = ({ text, icon, description, handlerResult }) => {
  const navigate = useNavigate();
  return <>
    <div className={'text-center'}>
      <FontAwesomeIcon icon={icon} size={'6x'}
                       className={icon.iconName === 'check' ? `text-green-600` : `text-red-600`} />
    </div>
    <p className='mb-4 text-gray-500 dark:text-gray-300 text-center'>{text}</p>
    {
      description && <p className='mb-4 text-gray-500 dark:text-gray-300 text-center'>{description}</p>
    }
    <div className='flex justify-center items-center space-x-4'>
      <button data-modal-toggle='deleteModal' type='button' onClick={() => navigate('/dashboard')}
              className='py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'>
        To dashboard
      </button>
      <button type='submit' onClick={handlerResult}
              className='py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900'>
        Make a transfer
      </button>
    </div>
  </>
    ;
};

export default FormTransferResult;