import React, { useState } from 'react';
import Teleport from '../../../../components/Teleport';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Teleport to="body">
        {isOpen && (
          <div className="modal-demo">
            <p style={{ marginBottom: '20px' }}>Hello from the modal!</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        )}
      </Teleport>

      <style jsx>{`
        .modal-demo {
          position: fixed;
          z-index: 999;
          top: 20%;
          left: 50%;
          width: 300px;
          margin-left: -150px;
          background-color: var(--vt-c-bg);
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
} 