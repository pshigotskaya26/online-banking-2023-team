import './index.css';
import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Link, useNavigate } from 'react-router-dom';

const FormNewCredit: React.FC = () => {
  const { user } = useAppSelector((state) => state.authuser);
  console.log('user: ', user);

  return (
    <div className="new-credit__form">
      <h5 className="mb-5 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Take a new credit:
      </h5>
      <div className="new-credit__container">
        <div className="new-credit__content">1</div>
        <div className="new-credit__buttons">
          <input
            className="button button-create-credit"
            type="submit"
            value="Create a new credit"
          />
          <button className="button button-cancel">
            <Link to={'/dashboard'}>Cancel</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormNewCredit;
