import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState('');

  let nombreSinUseState = '';

  const cambioNombre = (newName) => {
    nombreSinUseState = newName;
    console.log('Nombre sin useState: ', nombreSinUseState);
  };

  return (
    <>
      <div>
        <h3>Nombre sin useState: {nombreSinUseState}</h3>
        <div>
          <span>Nombre:</span>
          <input
            type="text"
            onChange={(event) => cambioNombre(event.target.value)}
          />
        </div>
      </div>
      <div>
        <h3>Nombre con useState: {name}</h3>
        <div>
          <span>Nombre:</span>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default App;
