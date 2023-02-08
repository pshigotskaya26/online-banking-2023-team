import React from 'react';
import { Link } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import { ServicesPage } from '../pages/services';
import AuthorizationPage from '../pages/authorization';
import RegistrationPage from '../pages/registration';
import MainPage from '../pages/main';

const routes = [
  {
    path: '/',
    element: <MainPage />,
    name: 'Home',
  },
  {
    path: '/services',
    element: <ServicesPage />,
    name: 'Services',
  },
  {
    path: '/example',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
    name: 'Example',
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    name: 'Dashboard',
  },
  {
    path: '/login',
    element: <AuthorizationPage isLogin={true} />,
    name: 'Login',
  },
  {
    path: '/logout',
    element: <AuthorizationPage isLogin={false} />,
    name: 'Login',
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
    name: 'Registration',
  },
];

export default routes;
