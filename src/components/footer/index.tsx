import React, { FC } from 'react';
import Logo from '../logo';
import LogoRSS from "../../assets/rs_school_logo.svg"
import {Link} from "react-router-dom";
const Footer: FC = () => {

  let footerRoutes = [
    {
      path: "/",
      title: "Main"
    },
    {
      path: "/dashboard",
      title: "Dashboard"
    },
    {
      path: "/services",
      title: "Services"
    },
  ]

  return <footer className="p-4 border-t-2 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div className="mx-auto max-w-screen-xl text-center">
      <Logo />
      <p className="my-6 text-gray-500 dark:text-gray-400">Final task of team PSP</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">

        {
          footerRoutes.map((route) => {
            return <li>
              <Link to={route.path} className="mr-4 hover:underline md:mr-6 ">{route.title}</Link>
            </li>
          })
        }

      </ul>
      <img className={"max-w-[100px] text-center mx-auto"} src={LogoRSS} alt="RSS SCHOOL"/>
    </div>
  </footer>;
};

export default Footer;
