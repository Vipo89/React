import React, { useEffect, useState } from "react";
import { getAllTracks } from "../services/circuitFetch";
import { useNavigate } from "react-router-dom";

const TrackListPage = () => {
  const navigate = useNavigate();

  const [trackList, setTrackList] = useState([]);

  const loadTracks = () => {
    const tracksAux = getAllTracks();
    setTrackList(tracksAux);
  };

  const goToDetailsPage = (idTrack) => {
    const url = `/details/${idTrack}`;
    navigate(url);
  };

  useEffect(() => {
    loadTracks();
  }, []);

  return (
    <div>
      {!trackList || trackList.length === 0 ? (
        <h3>Cargando los datos</h3>
      ) : (
        <>
          <h3>Listado de usuarios</h3>
          <hr />
          {trackList.map((track, idx) => (
            <div key={idx}>
              <hr />
              <p>Id: {track.id}</p>
              <p>Nombre: {track.name}</p>
              <p>Longitud : {track.longitud}</p>
              <button onClick={ () => goToDetailsPage(track.id)}>Ver detalles</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TrackListPage;
