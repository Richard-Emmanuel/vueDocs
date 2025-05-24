import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './Basic.css';

const CompA = () => <div>Component A</div>;
const CompB = () => <div>Component B</div>;

const BetweenComponents = () => {
  const [activeComponent, setActiveComponent] = useState('A');

  return (
    <div className="demo">
      <label>
        <input
          type="radio"
          checked={activeComponent === 'A'}
          onChange={() => setActiveComponent('A')}
        /> A
      </label>
      <label>
        <input
          type="radio"
          checked={activeComponent === 'B'}
          onChange={() => setActiveComponent('B')}
        /> B
      </label>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={activeComponent}
          timeout={500}
          classNames="fade"
        >
          {activeComponent === 'A' ? <CompA /> : <CompB />}
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default BetweenComponents; 