import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './SlideFade.css';

const SlideFade = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="demo">
      <button onClick={() => setShow(!show)}>
        Toggle Slide + Fade
      </button>
      <CSSTransition
        in={show}
        timeout={800}
        classNames="slide-fade"
        unmountOnExit
      >
        <p style={{ marginTop: '20px' }}>hello</p>
      </CSSTransition>
    </div>
  );
};

export default SlideFade; 