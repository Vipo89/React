import React from "react";

const InfoLibroComponent = () => {
  const infoLibro = {
    ISBN: "cfdea9bc-616a-4e4b-8e61-ea74d4c9a4d4",
    author: "Alejandro García",
    title: "Leyendas de Codespace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque inventore, vitae libero amet fugit! Consequatur quas similique dolores ut doloremque reiciendis molestiae blanditiis, sequi, nulla aperiam molestias quisquam doloribus?",
  };
  return (
    <div>
      <h2>Book information</h2>
      <div>
        <p>Title: {infoLibro.title}</p>
        <p>ISBN: {infoLibro.ISBN}</p>
        <p>Description: {infoLibro.description}</p>
        <p>Author: {infoLibro.author}</p>
      </div>
    </div>
  );
};

export default InfoLibroComponent;
