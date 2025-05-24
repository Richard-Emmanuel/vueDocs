import React, { useState } from "react";

const CompA = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current component: A</p>
      <span style={{ marginRight: 20 }}>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default CompA;
