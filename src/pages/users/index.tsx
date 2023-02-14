import ClientLayout from '../../layouts/client';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import UsersList from '../../components/usersList';

const UsersPage = () => {

  const { users } = useAppSelector(state => state.users);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  return <ClientLayout>
    <UsersList users={users} />
  </ClientLayout>;
};

export default UsersPage;