import React from "react";

import { useState } from "react";

const CalculadoraComponent = () => {
  const [n1, setNum1] = useState(undefined);
  const [n2, setNum2] = useState(undefined);

  const [limit, SetLimit] = useState(Number(100));

  const [result, setResult] = useState(null);

  const [infoMessage, setInfoMessage] = useState("");

  const operacion = (opType) => {
    switch (opType) {
      case "SUMAR":
        setResult(n1 + n2);
        break;

      case "RESTAR":
        setResult(n1 - n2);
        break;

      case "MULTIPLICAR":
        if (n1 * n2 > limit) {
          setInfoMessage("Has llegado al límite");
          return;
        }
        setResult(n1 * n2);
        break;

      case "DIVIDIR":
        setResult(n1 / n2);
        break;

      case "POTENCIA":
        setResult(Math.pow(n1, n2));
        break;

      default:
        reset();
        break;
    }
  };

  const reset = () => {
    setNum1(undefined);
    setNum2(undefined);
    setResult(undefined);
  };

  const multiplicarPorCinco = () => {
    if (result !== undefined) {
      const nuevoResultado = result * 5;
      setResult(nuevoResultado);
      setInfoMessage(`Se ha multiplicado el resultado por 5`);
    } else {
      setInfoMessage("No hay resultado para multiplicar");
    }
  };
  return (
    <div>
      <h3>Calculadora</h3>
      <div>
        <h4>Valores a usar para el cálculo</h4>
        <div>
          <span>Número 1: {n1} </span>
          <input
            type="number"
            value={n1 ?? ""}
            onChange={(e) => setNum1(Number(e.target.value))}
          />
        </div>
        <div>
          <span>Número 2: {n2} </span>
          <input
            type="number"
            value={n2 ?? ""}
            onChange={(e) => setNum2(Number(e.target.value))}
          />
        </div>
      </div>
      <div>
        <h4>Operaciones a realizar</h4>
        <button onClick={() => operacion("SUMAR")}>+</button>
        <button onClick={() => operacion("RESTAR")}>-</button>
        <button onClick={() => operacion("MULTIPLICAR")}>*</button>
        <button onClick={() => operacion("DIVIDIR")}>/</button>
        <button onClick={() => operacion("POTENCIA")}>xʸ</button>
        <button onClick={reset}>C</button>

        <button onClick={multiplicarPorCinco}>x5</button>
      </div>
      <div>Resultado: {result == null ? "Aún no hay resultados" : result}</div>
      <div>
        <p>{infoMessage}</p>
      </div>
      <div>
        <small>El límite en la multiplicación es {limit}</small>
      </div>
    </div>
  );
};
export default CalculadoraComponent;
