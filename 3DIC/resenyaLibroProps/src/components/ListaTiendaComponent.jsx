import React from "react";
import TiendaLibroComponent from "./TiendaLibroComponent";

const ListaTiendaComponent = (props) => {
  const { listaTienda } = props;
  return (
    <div>
      <h2>Find it here!</h2>
      {listaTienda.map((shop, idx) => (
        <TiendaLibroComponent tienda={shop} idx={idx} />
        // <div key={idx}>
        //   <h3>Name: {shop.name}</h3>
        //   <p>Address: {shop.address}</p>
        // </div>
      ))}
    </div>
  );
};

export default ListaTiendaComponent;
