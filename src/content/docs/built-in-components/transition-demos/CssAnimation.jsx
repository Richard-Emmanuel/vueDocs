import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './CssAnimation.css';

const CssAnimation = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="demo">
      <button onClick={() => setShow(!show)}>Toggle</button>
      <CSSTransition
        in={show}
        timeout={500}
        classNames="bounce"
        unmountOnExit
      >
        <p style={{ marginTop: '20px', textAlign: 'center' }}>
          Hello here is some bouncy text!
        </p>
      </CSSTransition>
    </div>
  );
};

export default CssAnimation; 