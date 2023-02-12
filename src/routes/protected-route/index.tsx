import UserRolesEnum from '../../types/enums/UserRolesEnum';
import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  expectedRoles: UserRolesEnum[],
  children: React.ReactNode
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ expectedRoles, children }) => {
  const isAuth = true;
  const arrRolesRequired = !!expectedRoles?.length;
  const roles = [UserRolesEnum.ADMIN];

  const rolesMatch = arrRolesRequired
    ? expectedRoles.some(r => roles.indexOf(r) >= 0)
    : 0;

  if (!isAuth || !rolesMatch) {
    return <Navigate to={'/'} replace />;
  }

  return <>
    {children}
  </>;
};

export default ProtectedRoute;