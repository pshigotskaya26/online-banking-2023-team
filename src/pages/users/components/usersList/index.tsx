import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IAdminUser, IClientUser } from '../../../../types/interfaces/IUser';

export interface UsersListProps {
  users: (IClientUser | IAdminUser)[];
}

const UsersList: FC<UsersListProps> = ({ users }) => {
  return <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600'>
    <thead className='bg-gray-100 dark:bg-gray-700'>
    <tr>
      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
        Name
      </th>
      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
        Phone
      </th>
      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
        Password
      </th>
      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
        Role
      </th>
      <th scope='col' className='p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400'>
        Actions
      </th>
    </tr>
    </thead>
    <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
    {
      users.map(user => {
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
          <td
            className='p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white'>{user.password}</td>
          <td className='p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white'>
            <div className='flex items-center'>
              <div className='h-2.5 w-2.5 rounded-full bg-green-400 mr-2' />
              {user.role}
            </div>
          </td>
          <td className='p-4 space-x-2 whitespace-nowrap'>
            <button type='button'
                    className='inline-flex border text-black items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>

              Info
            </button>
            <button type='button'
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900'>

              Delete user
            </button>
          </td>
        </tr>;
      })
    }


    </tbody>
  </table>;
};

export default UsersList;

