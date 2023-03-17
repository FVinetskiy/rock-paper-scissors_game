import React, { FC, useState } from 'react';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Game from './components/Game/Game';
import GameBot from './components/GameBot/GamaBot';

const App: FC = () => {
  const [modalActive, setmodalActive] = useState(false);
  const [GetСhoice, setGetСhoice] = useState('');
  const [PageGame, setPageGame] = useState(true);

  const setActiveModal = () => {
    setmodalActive(true);
  };

  const GetMyChoice = (src: any) => {
    setGetСhoice(src);
    setPageGame(false);
  };

  const RestartGame = () => {
    setPageGame(true);
  };

  return (
    <div className="container">
      <Header />
      {PageGame ? (
        <Game myChoice={GetMyChoice} />
      ) : (
        <GameBot RestartGame={RestartGame} option={GetСhoice} />
      )}
      <Modal active={modalActive} setActive={setmodalActive} />
      <button className="button-rules" onClick={setActiveModal}>
        rules
      </button>
    </div>
  );
};

export default App;
