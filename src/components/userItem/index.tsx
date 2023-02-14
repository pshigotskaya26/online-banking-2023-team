import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';
import { IAdminUser, IClientUser } from '../../types/interfaces/IUser';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import UserRolesEnum from '../../types/enums/UserRolesEnum';

export interface UserItemProps {
  user: IAdminUser | IClientUser;
  handleDisableUser: (n: number) => void;
}

const UserItem: FC<UserItemProps> = ({ user, handleDisableUser }) => {
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);

  const handleHiddenPassword = () => {
    setIsHiddenPassword(!isHiddenPassword);
  };

  return <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
    <td className='flex items-center p-4 mr-12 space-x-6 whitespace-nowrap'>
      <FontAwesomeIcon icon={faUser} className={'text-blue-600'} />
      <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>
        <div className='text-base font-semibold text-gray-900 dark:text-white'>{user.name}</div>
        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>{user.email}</div>
      </div>
    </td>

    <td className='p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white'>{user.phone}
    </td>
    <td className='p-4 text-base font-medium text-gray-900
    whitespace-nowrap dark:text-white cursor-pointer'
        onClick={handleHiddenPassword}
    >{isHiddenPassword ? '*****' : user.password}</td>
    <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white'>
      <div className='flex items-center'>
        <div className='h-2.5 w-2.5 rounded-full bg-green-400 mr-2' />
        {user.role}
      </div>
    </td>
    <td className='p-4 space-x-2 whitespace-nowrap'>
      {user.role === UserRolesEnum.CLIENT &&
        <button type='button'
                onClick={() => handleDisableUser(user.id)}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium
              text-center text-white 
              ${user.isDisabledOperations ? 'bg-gray-600' : 'bg-red-600'} 
              
              rounded-lg hover:bg-red-800
              focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900`}>
          {user.isDisabledOperations ? 'Unblock user' : 'Block user'}
        </button>
      }

    </td>
  </tr>;
};

export default UserItem;

