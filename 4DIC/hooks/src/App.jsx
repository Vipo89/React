import { useState } from "react";
import "./App.css";

function App() {
  const [name, SetName] = useState("Nombre inicial");
  const [edad, setEdad] = useState(18);

  let nombreSinUseState = "Nombre inicial";

  const cambioNombre = (newName) => {
    nombreSinUseState = newName;
    console.log("Nombre sin useState", nombreSinUseState);
  };

  return (
    <>
      <div>
        <h3>Nombre sin UseState: {nombreSinUseState}</h3>
        <div>
          <span>Nombre:</span>
          <input
            type="text"
            onChange={(event) => cambioNombre(event.target.value)}
          />
        </div>
      </div>

      <div>
        <h3>Nombre con UseState: {name}</h3>
        <div>
          <span>Nombre: </span>
          <input
            type="text"
            onChange={(event) => SetName(event.target.value)}
            value={name}
          />
        </div>
        
        <span>
          {name === "" ? "No has escrito nada aún" : `Estás escribiendo:d ${name}`}
        </span>

        <div>
          <p>Edad actual: {edad}</p>
          <button onClick={() => setEdad(21)}>Cumplir 21</button>
          <button onClick={() => setEdad(edad + 1)}>Sumar 1</button>
        </div>
      </div>
    </>
  );
}

export default App;
