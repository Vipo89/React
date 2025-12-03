import React from "react";
import TarjetaRecomendacionComponent from "./TarjetaRecomendacionComponent";

const RecomendacionesLibroComponent = (props) => {
  const { recomendacionesList } = props;

  return (
    <div>
      <h2>Recomendaciones</h2>
      {recomendacionesList.map((recomendacion, idx) => (
<TarjetaRecomendacionComponent recomendacion={recomendacion} idx = {idx}/>

        // <div key={idx}>
        //   <h3>Título: {recomendacion.title}</h3>
        //   <p>ISBN: {recomendacion.ISBN}</p>
        //   <p>Autor: {recomendacion.author}</p>
        //   <p>Descripción: {recomendacion.description}</p>
        // </div>
      ))}
    </div>
  );
};

export default RecomendacionesLibroComponent;
