// src/components/Alert.tsx

import React from 'react';

const Alert = ({ message }: { message: string }) => (
  <div
    style={{
      position: 'fixed',
      bottom: '16px',
      right: '16px',
      backgroundColor: '#22c55e',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontSize: '16px',
      fontWeight: '600',
      zIndex: 50,
      transition: 'opacity 0.4s ease-out',
      opacity: 1,
    }}
  >
    {message}
  </div>
);

export default Alert;
