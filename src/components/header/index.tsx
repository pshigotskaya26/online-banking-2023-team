import React from 'react';
import './style.css';
import routes from '../../routes';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="bg-green-600 py-4">
      <div className="container w-screen">
        <div className="flex flex-row">
          {routes.map((route) => {
            return (
              <Link to={`${route.path}`} key={route.path}>
                <div className="px-4">
                  <p className="text-white capitalize">{route.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
