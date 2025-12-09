import React from 'react';
import InfoLibroComponent from '../components/InfoLibroComponent';
import DondeComprarLibroComponent from '../components/DondeComprarLibroComponent';
import ResenyasLibroComponent from '../components/ResenyasLibroComponent';
import libro from '../data/infoFromApi';
import RecomendacionesComponent from '../components/RecomendacionesComponent';

const InfoLibroPage = () => {
  //const data => Proviene de una peticion a una API, En ese caso, "libro" que tenemos guardado
  return (
    <>
      <div>
        <h1>Pagina de detalles de un libro</h1>
      </div>
      <hr />
      <InfoLibroComponent
        ejemplo1={'Paso un parametro por props'}
        infoLibro={libro.info}
      />
      <hr />
      <DondeComprarLibroComponent listaTiendas={libro.tiendas} />
      <hr />
      <ResenyasLibroComponent reviewList={libro.reviews} />
      <hr />
      <RecomendacionesComponent librosRecomendados={libro.recomendaciones} />
    </>
  );
};

export default InfoLibroPage;
