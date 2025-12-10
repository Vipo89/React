import React from 'react'

const VeranoComponent = (props) => {
    const {changeToInvierno} = props;
  return (
    <div><p>Estamos en verano</p> <button onClick={() => changeToInvierno()}>Cambia a invierno</button></div>
  )
}

export default VeranoComponent