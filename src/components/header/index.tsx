import React, { useCallback, useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from '../logo';
import { useAppSelector } from '../../hooks/useAppSelector';
import UserRolesEnum from '../../types/enums/UserRolesEnum';

const defaultRoutes = [
  {
    path: '/',
    title: 'Main',
  },
  {
    path: '/login',
    title: 'Login',
  },
];
const clientRoutes = [
  {
    path: '/',
    title: 'Main',
  },
  {
    path: '/dashboard',
    title: 'Main',
  },
];
const adminRoutes = [
  {
    path: '/',
    title: 'Main',
  },
  {
    path: '/services',
    title: 'Services',
  },
];

const Header: React.FC = () => {
  const { user } = useAppSelector((state) => state.authuser);
  const [routes, setRoutesList] = useState(defaultRoutes);

  useCallback(() => {
    if (user === null) {
      setRoutesList(defaultRoutes);
      return;
    }
    if (user.role === UserRolesEnum.ADMIN) {
      setRoutesList(adminRoutes);
      return;
    }
    if (user.role === UserRolesEnum.CLIENT) {
      setRoutesList(clientRoutes);
      return;
    }
  }, [user]);

  return (
    <header className="border-b-2">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {routes.map((route) => {
                return (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      className="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                    >
                      {route.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {user !== null && (
            <div className="flex justify-center items-center space-x-4 cursor-pointer">
              <div className="relative">
                <img
                  alt=""
                  className="p-1 ring-2 ring-gray-300 dark:ring-gray-500 !rounded-full rounded w-10 h-10 rounded"
                  data-testid="flowbite-avatar-img"
                  src={user.photo}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
