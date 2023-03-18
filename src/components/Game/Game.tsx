import React, { FC } from 'react';
import './Game.scss';
import { ReactSVG } from 'react-svg';

type Ibutton = {
  id: number;
  src: string;
};

const SelectsPlay: Ibutton[] = [
  {
    id: 1,
    src: 'rock',
  },
  {
    id: 2,
    src: 'scissors',
  },
  {
    id: 3,
    src: 'lizard',
  },
  {
    id: 4,
    src: 'paper',
  },
  {
    id: 5,
    src: 'spock',
  },
];

type GameProps = { myChoice: Function };

const Game: FC<GameProps> = ({ myChoice }) => {
  

  return (
    <div className="game">
      {SelectsPlay.map((item) => {
        const srcSvg = `icon-${item.src}.svg`;
        return (
          <button
            onClick={() => myChoice(item.src)}
            key={item.id}
            className={`game__button game__button--${item.src}`}
          >
            <ReactSVG src={srcSvg} />
          </button>
        );
      })}
    </div>
  );
};

export default Game;
