import React, { useState } from 'react';

const CalculadoraComponent = () => {
  const [valorActualMultiplicación, setValorActualMultiplicación] = useState(0);

  const multiplicar = (valorParaMultiplicar) => {
    if (valorActualMultiplicación !== 0) {
      setValorActualMultiplicación(
        valorActualMultiplicación * valorParaMultiplicar
      );
    } else {
      setValorActualMultiplicación(1);
    }
  };

  return (
    <>
      <div>
        <h2>Multiplicador</h2>
        <div>
          <button onClick={() => multiplicar(2)}>x2</button>
          <button onClick={() => multiplicar(3)}>x3</button>
          <button onClick={() => multiplicar(0)}>Reset</button>
          <br />
          <span>
            Resultado mutiplicador:
            <span className="bold">{valorActualMultiplicación}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default CalculadoraComponent;
