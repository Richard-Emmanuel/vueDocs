import { useState, useEffect } from "react";

export function useMouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    function update(event) {
      setPosition({
        x: Math.round(event.clientX),
        y: Math.round(event.clientY),
      });
    }

    // Add event listener
    window.addEventListener("mousemove", update);

    // Initial position
    update({ clientX: 0, clientY: 0 });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, []);

  return position;
}
