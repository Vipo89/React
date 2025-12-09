import React from 'react';

const RecomendacionesComponent = (props) => {
  const { librosRecomendados } = props;

  return (
    <div>
      <h2>Recomendaciones</h2>
      {librosRecomendados.map((lr, idx) => (
        <div key={idx}>
          <p>ISBN: {lr.ISBN}</p>
          <p>Titulo: {lr.title}</p>
          <p>Autor: {lr.author}</p>
          <p>Descripción: {lr.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RecomendacionesComponent;
