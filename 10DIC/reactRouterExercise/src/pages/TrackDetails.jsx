import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTrackById } from "../services/circuitFetch";
import { useEffect } from "react";

const TrackDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  const idTrack = params.idTrack;

  const [trackDetails, setTrackDetails] = useState(undefined);

  const loadTrackDetails = () => {
    const auxData = getTrackById(idTrack);
    setTrackDetails(auxData);
  };

  const backToList = () => {
    navigate("/track");
  };

  useEffect(() => {
    loadTrackDetails();
  }, []);

  return (
    <div>
      {!trackDetails ? (
        <h2>Cargando datos...</h2>
      ) : (
        <>
          <h2>Detalles del circuito</h2>
          <hr />
          <div>
            <p>Nombre: {trackDetails.nombre}</p>
            <p>Longitud: {trackDetails.longitud}</p>
          </div>
          <button onClick={backToList}>Volver a la lista</button>
        </>
      )}
    </div>
  );
};

export default TrackDetails;
