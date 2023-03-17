import React, { FC } from 'react';
import './Header.scss';
import { ReactSVG } from 'react-svg';

const Header:FC = () => {
  const [WinnerCount, setWinnerCount] = React.useState(0);
  return (
    <header className='header'>
      <div className="header__content">
        <ReactSVG src="logo-bonus.svg" />
        <div className="header__score">
          <p className="header__text">score</p>
          <p className="header__count">{WinnerCount}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
