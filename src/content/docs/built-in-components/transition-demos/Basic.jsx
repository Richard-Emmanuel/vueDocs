import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Basic.css';

const Basic = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="demo">
      <button onClick={() => setShow(!show)}>Toggle Fade</button>
      <CSSTransition
        in={show}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <p style={{ marginTop: '20px' }}>hello</p>
      </CSSTransition>
    </div>
  );
};

export default Basic; 