import React from "react";
import TarjetaResenyaComponent from "./TarjetaResenyaComponent";

const ListaReviewComponent = (props) => {
  const { reviewList, reviewsNumber, tituloSeccion } = props;
  // console.log(reviewsNumber);
  // console.log(tituloSeccion);

  return (
    <div>
      <h2>Reviews</h2>
      <h3>Número total de reseñas: {reviewsNumber}</h3>
      <h4>{tituloSeccion}</h4>
      {reviewList.map((review, idx) => (
        <TarjetaResenyaComponent review={review} idx={idx} reseña ={idx+1} />
      ))}
    </div>
  );
};

export default ListaReviewComponent;
