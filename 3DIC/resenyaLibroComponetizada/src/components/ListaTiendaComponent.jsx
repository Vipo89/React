import React from "react";

const ListaTiendaComponent = () => {
  const listaTienda = [
    {
      id: 0,
      name: "Deckow - Runolfsson",
      address: "111 Asa Radial",
    },
    {
      id: 1,
      name: "Bernier - Swift",
      address: "0421 Feeney Station",
    },
  ];
  return (
    <div>
      <h2>Find it here!</h2>
      {listaTienda.map((shop, idx) => (
        <div key={idx}>
          <h3>Name: {shop.name}</h3>
          <p>Address: {shop.address}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaTiendaComponent;
