import React from 'react';
import { Link } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import { ServicesPage } from '../pages/services';
import NewCardPage from '../pages/newcard';

const routes = [
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/example',
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: 'dashboard',
    element: <DashboardPage />,
  },
  {
	path: '/new-card',
	element: <NewCardPage />
  }
];

export default routes;
