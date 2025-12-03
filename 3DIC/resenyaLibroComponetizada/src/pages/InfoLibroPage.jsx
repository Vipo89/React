import React from "react";
import InfoLibroComponent from "../components/InfoLibroComponent";
import ListaTiendaComponent from "../components/ListaTiendaComponent";
import ListaReviewComponent from "../components/ListaReviewComponent";
import MasInfoLibroComponent from "../components/MasInfoLibroComponent";

function InfoLibroPage() {
  
  return (
    <>
      <div>
        <h1>Web for book details</h1>
      </div>
      <hr />
      <InfoLibroComponent />
      <hr />
      <MasInfoLibroComponent/>
      <hr />
      <ListaTiendaComponent />
      <hr />
      <ListaReviewComponent />
    </>
  );
}

export default InfoLibroPage;
