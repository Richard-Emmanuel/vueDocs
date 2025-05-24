import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import gsap from 'gsap';
import './JsHooks.css';

const JsHooks = () => {
  const [show, setShow] = useState(true);

  const onEnter = (node) => {
    gsap.set(node, {
      scaleX: 0.25,
      scaleY: 0.25,
      opacity: 1
    });

    gsap.to(node, {
      duration: 1,
      scaleX: 1,
      scaleY: 1,
      ease: 'elastic.inOut(2.5, 1)'
    });
  };

  const onExit = (node) => {
    gsap.to(node, {
      duration: 0.7,
      scaleX: 1,
      scaleY: 1,
      x: 300,
      ease: 'elastic.inOut(2.5, 1)'
    });
    
    gsap.to(node, {
      duration: 0.2,
      delay: 0.5,
      opacity: 0
    });
  };

  return (
    <div className="demo">
      <button onClick={() => setShow(!show)}>Toggle</button>

      <Transition
        in={show}
        timeout={1000}
        onEnter={onEnter}
        onExit={onExit}
        mountOnEnter
        unmountOnExit
      >
        <div className="gsap-box" />
      </Transition>
    </div>
  );
};

export default JsHooks; 