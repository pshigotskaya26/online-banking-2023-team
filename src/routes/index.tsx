import React from 'react';
import { RouteObject } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import { ServicesPage } from '../pages/services';
import AuthorizationPage from '../pages/authorization';
import RegistrationPage from '../pages/registration';
import MainPage from '../pages/main';

import TransfersPage from '../pages/transfers';
import NewCardPage from '../pages/newcard';
import NewCreditPage from '../pages/newcredit';
import MyCreditsPage from '../pages/mycredits';
import ProtectedRoute from './protected-route';
import UserRolesEnum from '../types/enums/UserRolesEnum';
import ErrorPage from '../pages/error';
import UsersPage from '../pages/users';
import CreditsAdmin from '../pages/credits-admin';
import CreditInfoAdmin from '../pages/credit-info-admin';
import PaymentsPage from '../pages/payments';
import { PaymentForm } from '../pages/payments/components/paymentForm';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
    id: 'Home',
  },
  {
    path: '/services',
    element: (
      <ProtectedRoute expectedRoles={[UserRolesEnum.ADMIN]}>
        <ServicesPage />
      </ProtectedRoute>
    ),
    id: 'Services',
  },
  {
    path: '/users',
    element: (
      <ProtectedRoute expectedRoles={[UserRolesEnum.ADMIN]}>
        <UsersPage />
      </ProtectedRoute>
    ),
    id: 'Users',
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute expectedRoles={[UserRolesEnum.CLIENT]}>
        <DashboardPage />
      </ProtectedRoute>
    ),
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
    id: 'Logout',
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
    id: 'Registration',
  },
  {
    path: '/transfers',
    element: (
      <ProtectedRoute expectedRoles={[UserRolesEnum.CLIENT]}>
        <TransfersPage />
      </ProtectedRoute>
    ),
    id: 'Transfers',
  },
  {
    path: '/payments/*',
    element: (
      <ProtectedRoute expectedRoles={[UserRolesEnum.CLIENT]}>
        <PaymentsPage />
      </ProtectedRoute>
    ),
    id: 'Payments',
    children: [
      {
        path: ':code',
        element: (
          <ProtectedRoute expectedRoles={[UserRolesEnum.CLIENT]}>
            <PaymentForm />
          </ProtectedRoute>
        ),
        id: 'PaymentForm',
      },
    ],
  },
  {
    path: '/new-card',
    element: (
      <ProtectedRoute expectedRoles={[UserRolesEnum.CLIENT]}>
        <NewCardPage />
      </ProtectedRoute>
    ),
    id: 'NewCard',
  },
  {
    path: '/take-credit',
    element: <NewCreditPage />,
    id: 'NewCredit',
  },
  {
    path: '/my-credits',
    element: <MyCreditsPage />,
    id: 'MyCredits',
  }, {
    path: '/credits-admin',
    element: (
      <ProtectedRoute expectedRoles={[UserRolesEnum.ADMIN]}>
        <CreditsAdmin />
      </ProtectedRoute>
    ),
    id: 'Credits Admin',
  },
  {
  
    path: '/credits-admin/:id',
    element: (
      <ProtectedRoute expectedRoles={[UserRolesEnum.ADMIN]}>
        <CreditInfoAdmin />
      </ProtectedRoute>
    ),
    id: 'Credits Admin Info',
  },
  {
    path: '*',
    element: <ErrorPage />,
    id: '404',

  },
];

export default routes;
