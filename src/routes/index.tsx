import React from 'react';
import { RouteObject } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import { ServicesPage } from '../pages/services';
import AuthorizationPage from '../pages/authorization';
import RegistrationPage from '../pages/registration';
import MainPage from '../pages/main';

import TransfersPage from '../pages/transfers';
import NewCardPage from '../pages/newcard';
import ProtectedRoute from './protected-route';
import UserRolesEnum from '../types/enums/UserRolesEnum';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
    id: 'Home',
  },
  {
    path: '/services',
    element: <ProtectedRoute expectedRoles={[UserRolesEnum.ADMIN]}>
      <ServicesPage />
    </ProtectedRoute>,
    id: 'Services',
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute expectedRoles={[UserRolesEnum.CLIENT]}>
      <DashboardPage />
    </ProtectedRoute>,
    id: 'Dashboard',
  },
  {
    path: '/login',
    element: <AuthorizationPage isLogin={true} />,
    id: 'Login',
  },
  {
    path: '/logout',
    element: <AuthorizationPage isLogin={false} />,
    id: 'Loguot',
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
    id: 'Registration',
  },
  {
    path: '/transfers',
    element: <ProtectedRoute expectedRoles={[UserRolesEnum.CLIENT]}>
      <TransfersPage />
    </ProtectedRoute>,
    id: 'Transfers',
  },
  {
    path: '/new-card',
    element: <ProtectedRoute expectedRoles={[UserRolesEnum.CLIENT]}>
      <NewCardPage />
    </ProtectedRoute>,
    id: 'NewCard',
  },
  {
    path: '*',
    element: <div> 404 </div>,
    id: '404',
  },
];

export default routes;
