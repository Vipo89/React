import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AutoContadorComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((valorPrevio) => valorPrevio + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p>Contador automático: {count}</p>
    </div>
  );
};

export default AutoContadorComponent;
