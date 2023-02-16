import React from 'react';
import { Link, RouteObject } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import { ServicesPage } from '../pages/services';
import AuthorizationPage from '../pages/authorization';
import RegistrationPage from '../pages/registration';
import MainPage from '../pages/main';

import TransfersPage from '../pages/transfers';
import NewCardPage from '../pages/newcard';
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
    element: <ServicesPage />,
    id: 'Services',
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
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
    element: <TransfersPage />,
    id: 'Transfers',
  },
  {
    path: '/payments',
    element: <PaymentsPage />,
    id: 'Payments',
    children: [
      {
        path: ':code',
        element: <PaymentForm />,
        id: 'PaymentForm',
      },
    ],
  },
  {
    path: '/new-card',
    element: <NewCardPage />,
    id: 'NewCard',
  },
];

export default routes;
