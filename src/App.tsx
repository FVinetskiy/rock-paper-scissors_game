import React, { FC, useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Game from './components/Game/Game';
import GameBot from './components/GameBot/GameBot';

const App: FC = () => {
  const [modalActive, setmodalActive] = useState(false);
  const [GetСhoice, setGetСhoice] = useState('');
  const [PageGame, setPageGame] = useState(true);
  const [winScore, setwinScore] = React.useState<any>(
    Number(localStorage.getItem('countWin')) || 0
  );

  useEffect(() => {
    localStorage.setItem('countWin', winScore);
  }, [winScore]);

  const setActiveModal = () => {
    setmodalActive(true);
  };

  const GetMyChoice = (src: string) => {
    setGetСhoice(src);
    setPageGame(false);
  };

  const RestartGame = () => {
    setPageGame(true);
  };

  return (
    <div className="container">
      <Header countWin={winScore} />
      {PageGame ? (
        <Game myChoice={GetMyChoice} />
      ) : (
        <GameBot
          winScore={winScore}
          setwinScore={setwinScore}
          RestartGame={RestartGame}
          option={GetСhoice}
        />
      )}
      <Modal active={modalActive} setActive={setmodalActive} />
      <button className="button-rules" onClick={setActiveModal}>
        rules
      </button>
    </div>
  );
};

export default App;
