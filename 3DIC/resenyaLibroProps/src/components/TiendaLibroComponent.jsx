import React from "react";

const TiendaLibroComponent = (props) => {
  const { tienda, idx } = props;

  return (
    <div key={idx}>
      <h3>Name: {tienda.name}   |||   Address: {tienda.address} </h3>
      {/* <p>Address: {tienda.address}</p> */}
    </div>
  );
};

export default TiendaLibroComponent;
