import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Welcome() {
  return <h1>Hello world</h1>;
}

function Saludo() {
  const nombre = "Juan";
  return <h1>¡Hola! {nombre}</h1>;
}

function Mensaje({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Bienvenido de nuevo</h1> : <h1>Inicia sesión </h1>}
    </div>
  );
}

function ListaDeTareas() {
  const tareas = ["Aprender React", "Hacer ejercicio", "Descansar la mente"];

  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index}>
          Tarea número: {index + 1} {tarea}
        </li>
      ))}
    </ul>
  );
}

function ListaDeFrutasSinFragmento() {
  return (
    <div>
      <ul>
        <li>Manzana 1</li>
        <li>Plátano 1</li>
        <li>Naranja 1</li>
      </ul>
    </div>
  );
}

function ListaDeFrutasConFragmento() {
  return (
    <>
      <ul>
        <li>Manzana 2</li>
        <li>Plátano 2</li>
        <li>Naranja 2</li>
      </ul>
    </>
  );
}

function App() {
  // const [count, setCount] = useState(0)

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
      <Welcome />
      <Saludo />
      <ListaDeTareas />
      <hr />
      <ListaDeFrutasSinFragmento/>
      <hr />
      <ListaDeFrutasConFragmento/>
    </>
  );
}

export default App;
