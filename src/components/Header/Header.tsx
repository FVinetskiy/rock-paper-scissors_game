import { FC } from 'react';
import './Header.scss';
import { ReactSVG } from 'react-svg';

type PropsHeader = {
  countWin: number;
};

const Header: FC<PropsHeader> = ({ countWin }) => {
  return (
    <header className="header">
      <div className="header__content">
        <ReactSVG src="logo-bonus.svg" />
        <div className="header__score">
          <p className="header__text">score</p>
          <p className="header__count">{countWin}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
