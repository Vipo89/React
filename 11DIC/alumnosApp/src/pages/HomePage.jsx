import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllstudents } from "../services/apiFetch";

const HomePage = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  const loadStudents = () => {
    const aux = getAllstudents();
    setStudents(aux);
  };

  const goToCreateStudent = () => {
    navigate("/create")
  }

  useEffect(() => {loadStudents();}, []);
  return (
    <div>
      <h1>Lista de alumnos</h1>
      <hr />
      <button onClick={goToCreateStudent}>Añadir nuevo alumno</button>
      <hr />
      {students.length === 0 ? (
        <p>No hay alumnos registrados</p>
      ) : (
        students.map((st,idx) => (
          <div key={idx}>
            <p>Nombre: {st.name}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default HomePage;
