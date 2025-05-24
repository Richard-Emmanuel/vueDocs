import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './ListMove.css';

const ListMove = () => {
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

  const shuffle = (array) => {
    const newArray = [...array];
    let currentIndex = newArray.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[currentIndex]
      ];
    }
    setItems(newArray);
  };

  return (
    <div className="demo">
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      <button onClick={() => shuffle(items)}>Shuffle</button>
      <TransitionGroup component="ul" style={{ marginTop: '20px' }}>
        {items.map(item => (
          <CSSTransition
            key={item}
            timeout={500}
            classNames="list2"
          >
            <li className="list-item">{item}</li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default ListMove; 