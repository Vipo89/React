import './App.css'
import HolaMundoComponent from './components/HolaMundoComponent'
import VehiculoComponent from './components/VehiculoComponent'

function App() {

  const titulo = "Estamos intentando aprender ReactJS"
  const segunda = "Segunda constante"

  return (
    <>
    <p>{titulo}</p>
    <hr />
    <p>{segunda}</p>
    <hr />
    <HolaMundoComponent />
    <VehiculoComponent />
    </>
  )
}

export default App