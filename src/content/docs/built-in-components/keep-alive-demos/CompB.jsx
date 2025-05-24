import React, { useState } from "react";

const CompB = () => {
  const [msg, setMsg] = useState("");

  return (
    <div>
      <p>Current component: B</p>
      <span style={{ marginRight: 20 }}>Message is: {msg}</span>
      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
    </div>
  );
};

export default CompB;
