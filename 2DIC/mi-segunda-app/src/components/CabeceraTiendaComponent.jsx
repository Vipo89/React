import React from "react";

function CabeceraTiendaComponent() {
  const titulo = "Bienvenido a mi tienda React";
  const subtitulo = "Aquí verás una lista de libros de ejemplo";
  return (
    <div>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
      <hr />
      <hr />
    </div>
  );
}

export default CabeceraTiendaComponent;
