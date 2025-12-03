import React from "react";

const TarjetaResenyaComponent = (props) => {
  //review={review} idx= {idx}/>>

  const { review, idx, reseña } = props;
  console.log(review, idx);

  return (
    <div key={idx}>
      <h4>Name: {review.name}</h4>
      <p>Review: {review.review}</p>
      <p>Date: {review.created_at}</p>
      <p>Reseña número: {reseña}</p>
    </div>
  );
};

export default TarjetaResenyaComponent;
