import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './NestedTransitions.css';

const NestedTransitions = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="demo">
      <button 
        onClick={() => setShow(!show)} 
        style={{ marginBottom: '20px' }}
      >
        Toggle
      </button>
      <CSSTransition
        in={show}
        timeout={550}
        classNames="nested"
        unmountOnExit
      >
        <div className="transition-demo-outer">
          <div className="transition-demo-inner">Hello</div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default NestedTransitions; 