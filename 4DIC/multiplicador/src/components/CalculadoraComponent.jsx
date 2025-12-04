import React, { useState } from "react";

const CalculadoraComponent = () => {
  const [multiplicador, SetMultiplicador] = useState(0);

  const multiplicar = (valorParaMultiplicar) => {
if (multiplicador !== 0) {
    SetMultiplicador(multiplicador * valorParaMultiplicar)
}
else{
    SetMultiplicador(1)
}
  }
  return (
    <>
      <div>
        <h2>Multiplicador</h2>
        <div>
          <button onClick={() => multiplicar(2)}>x2</button>
          <button onClick={() => multiplicar(3)}>x3</button>
          <button onClick={() => multiplicar(0)}>Reset</button>
          <span>Resultado Multiplicador: {multiplicador}</span>
        </div>
      </div>
    </>
  );
};

export default CalculadoraComponent;
