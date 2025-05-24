import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Teleport = ({ to = 'body', children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  const target = document.querySelector(to);
  if (!target) {
    console.warn(`Teleport target "${to}" not found`);
    return null;
  }

  return createPortal(children, target);
};

export default Teleport; 