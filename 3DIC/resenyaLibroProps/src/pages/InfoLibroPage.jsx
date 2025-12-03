import React from "react";
import InfoLibroComponent from "../components/InfoLibroComponent";
import ListaTiendaComponent from "../components/ListaTiendaComponent";
import ListaReviewComponent from "../components/ListaReviewComponent";
import libro from "../data/infoFromApi";
import RecomendacionesLibroComponent from "../components/RecomendacionesLibroComponent";

function InfoLibroPage() {
  const numeroResenyas = libro.reviews.length;
  return (
    <>
      <div>
        <h1>Web for book details</h1>
      </div>
      <hr />
      <InfoLibroComponent
        ejemplo1={"Paso un parametro por props"}
        infoLibro={libro.info}
      />
      <hr />
      <ListaTiendaComponent listaTienda={libro.tiendas} />
      <hr />
      <ListaReviewComponent reviewList={libro.reviews} reviewsNumber = {numeroResenyas} tituloSeccion = {"Opiniones de los lectores"}/>
      <hr />
      <RecomendacionesLibroComponent recomendacionesList = {libro.recomendaciones} />
    </>
  );
}

export default InfoLibroPage;
