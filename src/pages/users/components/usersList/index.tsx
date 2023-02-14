import React, { FC } from 'react';
import { IAdminUser, IClientUser } from '../../../../types/interfaces/IUser';
import UserItem from '../userItem';
import { useActions } from '../../../../hooks/useActions';

export interface UsersListProps {
  users: (IClientUser | IAdminUser)[];
}

const UsersList: FC<UsersListProps> = ({ users }) => {
  const { handleDisableOperationUser } = useActions();

  const handleDisableUser = (id: number) => {
    handleDisableOperationUser(id);
  };

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
          return <UserItem user={user} key={user.id} handleDisableUser={handleDisableUser} />;
        },
      )
    }
    </tbody>
  </table>;


};

export default UsersList;

