import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './ListBasic.css';

const ListBasic = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  const [nextNum, setNextNum] = useState(items.length + 1);

  const randomIndex = () => {
    return Math.floor(Math.random() * items.length);
  };

  const add = () => {
    const newItems = [...items];
    newItems.splice(randomIndex(), 0, nextNum);
    setItems(newItems);
    setNextNum(nextNum + 1);
  };

  const remove = () => {
    const newItems = [...items];
    newItems.splice(randomIndex(), 1);
    setItems(newItems);
  };

  return (
    <div className="demo">
      <button onClick={add}>Add at random index</button>
      <button onClick={remove}>Remove at random index</button>
      <TransitionGroup component="ul" style={{ marginTop: '20px' }}>
        {items.map(item => (
          <CSSTransition
            key={item}
            timeout={500}
            classNames="list"
          >
            <li>{item}</li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ListBasic; 