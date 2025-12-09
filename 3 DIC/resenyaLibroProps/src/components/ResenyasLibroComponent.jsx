import React from 'react';

const ResenyasLibroComponent = (props) => {
  const { reviewList } = props;

  return (
    <div>
      <h2>Reseñas del libro</h2>
      {reviewList.map((r, idx) => (
        <div key={idx}>
          <h4>Nombre: {r.name}</h4>
          <p>Fecha: {r.created_at}</p>
          <p>Reseña: {r.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ResenyasLibroComponent;
