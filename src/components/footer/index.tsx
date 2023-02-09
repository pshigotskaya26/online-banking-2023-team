import React, { FC } from 'react';
import Logo from '../logo';
import LogoRSS from '../../assets/rs_school.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: FC = () => {
  let footerRoutes = [
    {
      path: '/',
      title: 'Main',
    },
    {
      path: '/dashboard',
      title: 'Dashboard',
    },
    {
      path: '/services',
      title: 'Services',
    },
  ];

  return (
    <footer className="border-t-2 bg-white dark:bg-gray-800 ">
      <div
        className={
          'max-w-screen-xl flex items-center mx-auto px-4 lg:px-6 py-2.5'
        }
      >
        <Logo />
        {/*<p className="my-6 text-gray-500 dark:text-gray-400">*/}
        {/*  Final task of team PSP*/}
        {/*</p>*/}
        {/*<ul className="flex flex-wrap justify-center items-center text-gray-900 dark:text-white ">*/}
        {/*  {footerRoutes.map((route) => {*/}
        {/*    return (*/}
        {/*      <li key={route.path}>*/}
        {/*        <Link*/}
        {/*          to={route.path}*/}
        {/*          key={route.path}*/}
        {/*          className="mr-4 hover:underline md:mr-6 "*/}
        {/*        >*/}
        {/*          {route.title}*/}
        {/*        </Link>*/}
        {/*      </li>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</ul>*/}
        <div className={'ml-auto flex gap-2'}>
          <a href="https://github.com/pbond" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} /> pbond
          </a>
          <a
            href="https://github.com/sklevzhic"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> sklevzhic
          </a>
          <a
            href="https://github.com/pshigotskaya26"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} /> pshigotskaya26
          </a>
        </div>
        <img
          className={'max-w-[100px] text-center ml-5'}
          src={LogoRSS}
          alt="RSS SCHOOL"
        />
      </div>
    </footer>
  );
};

export default Footer;
