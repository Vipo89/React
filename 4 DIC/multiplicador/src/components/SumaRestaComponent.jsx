import React from 'react';
import { useState } from 'react';

const SumaRestaComponent = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <div>
      <h3>Suma y resta</h3>
      <div>
        <span>Primer número: </span>
        <input
          type="number"
          onChange={(e) => setNum1(Number(e.target.value))}
        />
      </div>
      <div>
        <span>Segundo número: </span>
        <input
          type="number"
          onChange={(e) => setNum2(Number(e.target.value))}
        />
      </div>
      <br />
      <button
        title="Al pulsar, sumarás los dos números anteriores"
        onClick={() => setResultado(num1 + num2)}
      >
        Sumar
      </button>
      <button
        title="Al pulsar, restarás los dos números anteriores"
        onClick={() => setResultado(num1 - num2)}
      >
        Restar
      </button>
      <br />
      <span>
        Resultado de la operación: <span className="bold">{resultado}</span>
      </span>
    </div>
  );
};

export default SumaRestaComponent;
