import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MovieComponent = () => {
  const [listType, setListType] = useState('popular');
  const [moviesData, setMoviesData] = useState([]);
  const [variable, setVarible] = useState(undefined);

  // Cuando selecciono el tipo del select, hace un setListType

  useEffect(() => {
    const data = getAllMovies(listType);
    setMoviesData(data);
  }, [listType]);

  return (
    <div>
      {variable && (
        <div>Compoennte cuando esa varaible tenga valor o exista</div>
      )}
      {moviesData.length === 0 ? (
        <h2>Aun no se han cargado peliculas</h2>
      ) : (
        moviesData.forEach((movie) => {
          <div className="movie-card">{movie}</div>;
        })
      )}
      );
    </div>
  );
};

export default MovieComponent;
