import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './BetweenElements.css';

const BetweenElements = ({ mode = 'out-in' }) => {
  const [docState, setDocState] = useState('saved');

  const getButton = () => {
    switch (docState) {
      case 'saved':
        return <button onClick={() => setDocState('edited')}>Edit</button>;
      case 'edited':
        return <button onClick={() => setDocState('editing')}>Save</button>;
      case 'editing':
        return <button onClick={() => setDocState('saved')}>Cancel</button>;
      default:
        return null;
    }
  };

  return (
    <div className="demo transition-demo">
      <span style={{ marginRight: '20px' }}>Click to cycle through states:</span>
      <div className="btn-container">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={docState}
            timeout={250}
            classNames="slide-up"
          >
            {getButton()}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default BetweenElements; 