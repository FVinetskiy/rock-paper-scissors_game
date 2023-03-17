import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
import './GameBot.scss';

type PropsGameBot = {
  option: string;
  RestartGame: Function;
};

const gameRules = {
  'icon-rock': {
    'icon-rock': 0,
    'icon-scissors': 1,
    'icon-lizard': 1,
    'icon-paper': -1,
    'icon-spock': -1,
  },
  'icon-scissors': {
    'icon-rock': 0,
    'icon-scissors': 1,
    'icon-lizard': 1,
    'icon-paper': -1,
    'icon-spock': -1,
  },
  'icon-lizard': {
    'icon-rock': 0,
    'icon-scissors': 1,
    'icon-lizard': 1,
    'icon-paper': -1,
    'icon-spock': -1,
  },
  'icon-paper': {
    'icon-rock': 0,
    'icon-scissors': 1,
    'icon-lizard': 1,
    'icon-paper': -1,
    'icon-spock': -1,
  },
  'icon-spock': {
    'icon-rock': 0,
    'icon-scissors': 1,
    'icon-lizard': 1,
    'icon-paper': -1,
    'icon-spock': -1,
  },
};

const GameBot: FC<PropsGameBot> = ({ option, RestartGame }) => {
  const [botSelection, setbotSelection] = React.useState('');
  const generateRandomOptionBot = () => {
    const OptionBot = [
        'icon-rock',
        'icon-scissors',
        'icon-lizard',
        'icon-paper',
        'icon-spock',
      ],
      randomText = Math.floor(Math.random() * OptionBot.length),
      opponentMove = OptionBot[randomText];

    setbotSelection(opponentMove);
    return opponentMove;
  };

  React.useEffect(() => {
    setTimeout(() => {
      result(option, generateRandomOptionBot());
    }, 2000);
  }, []);

  const result = (option: any, botSelection: any) => {
    console.log('моё', option);
    console.log('бота', botSelection);
    const zaza = gameRules['icon-rock']['icon-rock'];
  };

  const srcSvg = `${option}.svg`;
  const srcSvgBot = `${botSelection}.svg`;

  return (
    <div className="GameBot">
      <div className="GameBot__item">
        <p>You picked</p>
        <div className={`GameBot__result GameBot__result--${option}`}>
          <ReactSVG src={srcSvg} />
        </div>
      </div>
      <div className="GameBot__finish">
        You lose
        <button onClick={() => RestartGame()}>play again</button>
      </div>
      <div className="GameBot__item">
        <p>The house picked</p>
        <div
          className={
            botSelection
              ? `GameBot__result GameBot__result--${botSelection}`
              : 'GameBot__result loading'
          }
        >
          <ReactSVG src={srcSvgBot} />
        </div>
      </div>
    </div>
  );
};

export default GameBot;
