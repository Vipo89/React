import React from 'react';

const InfoLibroComponent = (props) => {
  const { ejemplo1, infoLibro } = props;

  return (
    <div>
      <h2>Información del libro</h2>
      <div>
        <p>Title : {infoLibro.title}</p>
        <p>ISBN : {infoLibro.ISBN}</p>
        <p>Autor: {infoLibro.author}</p>
        <p>Decripción: {infoLibro.description}</p>
      </div>
    </div>
  );
};

export default InfoLibroComponent;
