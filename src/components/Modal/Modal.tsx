import React, { FC } from 'react';
import { ReactSVG } from 'react-svg';
import './Modal.scss';

type PropsModal = {
  active: boolean;
  setActive: Function;
};

const Modal: FC<PropsModal> = ({ active, setActive }) => {
  return active ? (
    <div onClick={() => setActive(false)} className="modal">
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal__content"
      >
        <div className="modal__head">
          <p className="modal__title">rules</p>
          <button
            onClick={() => setActive(false)}
            className="modal__close"
          >
            <ReactSVG src="icon-close.svg" />
          </button>
        </div>
        <ReactSVG src="image-rules-bonus.svg" />
      </div>
    </div>
  ) : null;
};

export default Modal;
