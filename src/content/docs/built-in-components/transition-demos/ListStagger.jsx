import React, { useState, useMemo } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import gsap from 'gsap';
import './ListStagger.css';

const list = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' }
];

const ListStagger = () => {
  const [query, setQuery] = useState('');

  const computedList = useMemo(() => {
    return list.filter((item) => 
      item.msg.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const onEnter = (node, index) => {
    gsap.fromTo(
      node,
      {
        opacity: 0,
        height: 0
      },
      {
        opacity: 1,
        height: '1.6em',
        delay: index * 0.15,
        duration: 0.3
      }
    );
  };

  const onExit = (node, index) => {
    gsap.to(node, {
      opacity: 0,
      height: 0,
      delay: index * 0.15,
      duration: 0.3
    });
  };

  return (
    <div className="demo" style={{ height: '265px' }}>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <TransitionGroup component="ul">
        {computedList.map((item, index) => (
          <CSSTransition
            key={item.msg}
            timeout={300}
            onEnter={(node) => onEnter(node, index)}
            onExit={(node) => onExit(node, index)}
          >
            <li data-index={index}>{item.msg}</li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ListStagger; 