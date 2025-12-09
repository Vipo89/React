import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Welcome() {
  return <h1>Hello, World!</h1>;
}

function Saludo() {
  const nombre = "Juan";
  return <h1>!Hola {nombre} !</h1>;
}

function ListaDeTareas() {
  const tareas = ["Aprender React", "Hacer ejercicio", "Descansar la mente"];
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>{tarea}</li>
      ))}
    </ul>
  );
}

// Fragmentos
function ListaDeFrutasSinFragment() {
  return (
    <div>
      <h2>Lista de frutas 1</h2>
      <ul>
        <li>Manzana 1</li>
        <li>Platano 1</li>
        <li>Naranja 1</li>
      </ul>
    </div>
  );
}

function FrutasConFragment() {
  return (
    <>
      <h2>Lista de frutas 2</h2>
      <ul>
        <li>Manzana 2</li>
        <li>Platano 2</li>
        <li>Naranja 2</li>
      </ul>
    </>
  );
}

// export default ListaDeTareas

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* Esta es la forma de meter componenetes */}
      <Saludo />
      <Welcome />
      <ListaDeTareas />
      <hr />
      <ListaDeFrutasSinFragment />
      <hr />
      <FrutasConFragment />
    </>
  );
}

export default App;
