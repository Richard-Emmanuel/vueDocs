import React, { useState, useMemo } from "react";
import CompA from "./CompA";
import CompB from "./CompB";

const SwitchComponent = ({ useKeepAlive }) => {
  const [current, setCurrent] = useState("A");

  const components = {
    A: useKeepAlive ? useMemo(() => <CompA />, []) : <CompA />,
    B: useKeepAlive ? useMemo(() => <CompB />, []) : <CompB />,
  };

  const handleChange = (e) => {
    setCurrent(e.target.value);
  };

  return (
    <div className="demo">
      <label>
        <input
          type="radio"
          name="component"
          value="A"
          checked={current === "A"}
          onChange={handleChange}
        />
        A
      </label>
      <label>
        <input
          type="radio"
          name="component"
          value="B"
          checked={current === "B"}
          onChange={handleChange}
        />
        B
      </label>
      <div className="component-view">{components[current]}</div>
    </div>
  );
};

export default SwitchComponent;
