import React from "react";
import MenuComponent from "../components/MenuComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearRutaPage = () => {
  const [travel, setTravel] = useState({});
  const navigate = useNavigate();

  const travelHandler = (propName, propValue) => {
    setTravel({
      ...travel,
      [propName]: propValue,
    });
  };


  const createTravel = () => {
    console.log(travel);
    navigate("/info", { state: { travel } });
  };

  return (
    <div>

      <h2>Crear nuevo viaje</h2>
      <hr />
      <div>
        <div>
          <span>Nombre: </span>
          <input
            type="text"
            onChange={(e) => travelHandler("name", e.target.value)}
          />
        </div>
        <div>
          <span>Fecha: </span>
          <input
            type="text"
            onChange={(e) => travelHandler("date", e.target.value)}
          />
        </div>
        <div>
          <span>Presupuesto: </span>
          <input
            type="text"
            onChange={(e) => travelHandler("pres", e.target.value)}
          />
        </div>
        <div>
          <span>Viajeros: </span>
          <input
            type="text"
            onChange={(e) => travelHandler("travelers", e.target.value)}
          />
        </div>
        <button onClick={() => createTravel()}>Ver info del viaje</button>
      </div>
    </div>
  );
};

export default CrearRutaPage;
