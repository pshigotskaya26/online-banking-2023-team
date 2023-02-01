import React from 'react';
import './style.css';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className={'header'}>
      <div className={'header__logo'}>B</div>
      <div className={'header__nav'}>Навигация</div>
      <div className={'header__avatar'}>A</div>
    </div>
  );
};

export default Header;
