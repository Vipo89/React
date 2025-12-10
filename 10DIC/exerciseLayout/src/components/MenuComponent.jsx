import React from 'react'
import {Link} from 'react-router-dom'

const MenuComponent = () => {
  return (
    <nav>
        <Link to= {"/"}>HomePage</Link>
        <hr />
        <Link to= {"/contact"}>Contact</Link>
    </nav>
  )
}

export default MenuComponent