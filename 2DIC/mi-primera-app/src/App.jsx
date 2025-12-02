import "./App.css";
import HolaMundoComponent from "./components/HolaMundoComponent.JSX";
import PresentacionComponent from "./components/PresentacionComponent";
import VehiculoComponent from "./components/VehiculoComponent";


function App() {
  const title = "Estamos intentando aprender ReactJS";
  const second = "Segunda constante";

  const tercera = "Texto de prueba para la tercera constante"

  return (
<div>
      <div>
        <p>{title}</p>
        <hr />
        <p>{second}</p>
        <hr />
        <p>{tercera}</p>
      </div>
      <PresentacionComponent/>
      <HolaMundoComponent/>
      <HolaMundoComponent/>
      <HolaMundoComponent/>
<VehiculoComponent/>
 </div>
  );
}

export default App;
