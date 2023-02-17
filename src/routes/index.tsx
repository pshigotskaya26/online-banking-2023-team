import React from 'react';
import { Link, RouteObject } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import { ServicesPage } from '../pages/services';
import AuthorizationPage from '../pages/authorization';
import RegistrationPage from '../pages/registration';
import MainPage from '../pages/main';

import TransfersPage from '../pages/transfers';
import NewCardPage from '../pages/newcard';
import NewCreditPage from '../pages/newcredit';

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
    path: '/example',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
    id: 'Example',
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
    path: '/new-card',
    element: <NewCardPage />,
    id: 'NewCard',
  },
  {
    path: '/take-credit',
    element: <NewCreditPage />,
    id: 'NewCredit',
  },
];

export default routes;
