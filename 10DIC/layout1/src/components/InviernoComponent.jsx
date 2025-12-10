import React from 'react'

const InviernoComponent = (props) => {

    const {changeToVerano} = props;
  return (
    <div><p>Estamos en invierno</p> <button onClick={() => changeToVerano()}>Cambia a verano</button></div>
  )
}

export default InviernoComponent