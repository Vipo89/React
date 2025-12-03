import React from "react";

const InfoLibroComponent = (props) => {

  const { infoLibro } = props;

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
