import React from 'react';
import InfoLibroComponent from '../components/InfoLibroComponent';
import DondeComprarLibroComponent from '../components/DondeComprarLibroComponent';
import ResenyasLibroComponent from '../components/ResenyasLibroComponent';

const InfoLibroPage = () => {
  return (
    <>
      <div>
        <h1>Pagina de detalles de un libro</h1>
      </div>
      <hr />
      <InfoLibroComponent />
      <hr />
      <DondeComprarLibroComponent />
      <hr />
      <ResenyasLibroComponent />
    </>
  );
};

export default InfoLibroPage;
