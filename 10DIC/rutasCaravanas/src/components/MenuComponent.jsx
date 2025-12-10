import React from 'react'
import {Link} from 'react-router-dom'
const MenuComponent = () => {
  return (
   <nav>
    <Link to= {"/"}>Crear viaje</Link>
    <hr />
    <Link to= {"/info"}>Ver info del viaje</Link>
    <hr />
    <Link to= {"/contact"}>Contacto</Link>
   </nav>
  )
}

export default MenuComponent