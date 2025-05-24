// MousePosition.jsx
import React from "react";

export default function MousePosition() {
  return (
    <div
      className="demo"
      style={{
        fontSize: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f5f5f5",
        margin: "20px 0",
        minHeight: "60px",
        position: "relative",
        zIndex: 1000,
        userSelect: "none",
      }}
    >
      Mouse position is at: <span id="mouse-x">0</span>,{" "}
      <span id="mouse-y">0</span>
    </div>
  );
}
