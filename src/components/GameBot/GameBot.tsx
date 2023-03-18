import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
import './GameBot.scss';

type PropsGameBot = {
  option: string;
  RestartGame: Function;
  setwinScore: Function;
  winScore: number;
};

const gameRules = {
  rock: {
    rock: 0,
    scissors: 1,
    lizard: 1,
    paper: 2,
    spock: 2,
  },
  scissors: {
    rock: 2,
    scissors: 0,
    lizard: 1,
    paper: 1,
    spock: 2,
  },
  lizard: {
    rock: 2,
    scissors: 2,
    lizard: 0,
    paper: 1,
    spock: 1,
  },
  paper: {
    rock: 1,
    scissors: 2,
    lizard: 2,
    paper: 0,
    spock: 1,
  },
  spock: {
    rock: 1,
    scissors: 1,
    lizard: 2,
    paper: 2,
    spock: 0,
  },
};

const GameBot: FC<PropsGameBot> = ({
  option,
  RestartGame,
  winScore,
  setwinScore,
}) => {
  const [resultGame, setresultGame] = React.useState<null | number>(null);
  const [botSelection, setbotSelection] = React.useState<string>('');

  const getCount = (number: number) => {
    if (number === 1) {
      return setwinScore(winScore + 1);
    }
  };

  const generateRandomOptionBot = () => {
    const OptionBot = [
        'rock',
        'scissors',
        'lizard',
        'paper',
        'spock',
      ],
      randomText = Math.floor(Math.random() * OptionBot.length),
      opponentMove = OptionBot[randomText];
    setbotSelection(opponentMove);
    return opponentMove;
  };

  React.useEffect(() => {
    setTimeout(() => {
      result(option, generateRandomOptionBot());
    }, 1000);
  }, []);

  const result = (option: string, botSelection: string) => {
    const resultFinal =
      gameRules[option as keyof typeof gameRules][
        botSelection as keyof typeof gameRules
      ];
    setresultGame(resultFinal);
    getCount(resultFinal);
  };

  const srcSvg = `icon-${option}.svg`;
  const srcSvgBot = `icon-${botSelection}.svg`;

  return (
    <div className="GameBot">
      <div className="GameBot__item">
        <p>You picked</p>
        <div className={`GameBot__result GameBot__result--${option}`}>
          <ReactSVG src={srcSvg} />
        </div>
      </div>
      {
        <div className="GameBot__finish">
          <div className="GameBot__wrap-text">
            {resultGame === 0 && (
              <p className="GameBot__text">Draw</p>
            )}
            {resultGame === 1 && (
              <p className="GameBot__text">You win</p>
            )}
            {resultGame === 2 && (
              <p className="GameBot__text">You lose</p>
            )}
          </div>

          <button
            className="GameBot__restart"
            onClick={() => RestartGame()}
          >
            play again
          </button>
        </div>
      }
      <div className="GameBot__item">
        <p>The house picked</p>
        <div
          className={
            botSelection
              ? `GameBot__result GameBot__result--${botSelection}`
              : 'GameBot__result loading'
          }
        >
          {botSelection && <ReactSVG src={srcSvgBot} />}
        </div>
      </div>
    </div>
  );
};

export default GameBot;
