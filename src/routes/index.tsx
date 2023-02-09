import React from 'react';
import { Link } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import { ServicesPage } from '../pages/services';

const routes = [
  {
    path: '/',
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
  },
];

export default routes;
