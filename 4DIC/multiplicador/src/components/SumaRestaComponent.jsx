import React, { useState } from "react";

const SumaRestaComponent = () => {
  const [n1, SetN1] = useState(0);

  const [n2, SetN2] = useState(0);

  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(Number(n1) + Number(n2));
  };

  const restar = () => {
    setResultado(Number(n1) - Number(n2));
  };

  const multiplicar = () => {
    setResultado(Number(n1) * Number(n2));
  };

  const dividir = () => {
    if (Number(n2) === 0) {
      setResultado("No se puede dividir entre 0");
      return;
    }
    setResultado(Number(n1) / Number(n2));
  };

  return (
    <div>
      <input type="number" onChange={(e) => SetN1(e.target.value)} />
      <input type="number" onChange={(e) => SetN2(e.target.value)} />

      <button onClick={sumar}>Suma</button>
      <button onClick={restar}>Resta</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <button onClick={dividir}>Dividir</button>

      <p>Resultado:{resultado} </p>
    </div>
  );
};

export default SumaRestaComponent;
