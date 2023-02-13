import UserRolesEnum from '../../types/enums/UserRolesEnum';
import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';

interface ProtectedRouteProps {
  expectedRoles: UserRolesEnum[],
  children: React.ReactNode
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ expectedRoles, children }) => {

  const { user } = useAppSelector(state => state.authuser);

  const isAuth = !!user;
  const arrRolesRequired = !!expectedRoles?.length;
  const roles = [user?.role];

  const rolesMatch = arrRolesRequired
    ? expectedRoles.some(r => roles.indexOf(r) >= 0)
    : 0;

  if (!isAuth || !rolesMatch) {
    return <Navigate to={'/login'} />;
  }

  return <>
    {children}
  </>;
};

export default ProtectedRoute;