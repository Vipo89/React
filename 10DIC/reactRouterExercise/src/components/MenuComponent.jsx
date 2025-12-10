import React from "react";
import { Link } from "react-router-dom";

const MenuComponent = () => {
  return (
    <nav>
      <Link to={"/track"}>Listado Circuitos</Link>
      <hr />
      <Link to={"/contact"}>Contacto</Link>
    </nav>
  );
};

export default MenuComponent;
