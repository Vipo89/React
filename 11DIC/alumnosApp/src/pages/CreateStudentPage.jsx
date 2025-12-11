import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/apiFetch";

const ERROR_MESSAGE = "Este campo no puede estar vacío";

const CreateStudentPage = () => {
  const navigate = useNavigate();

  const [newStudent, setNewStudent] = useState({});

  const [errorMessageState, setErrorMessageState] = useState({});

  const newStudentHandler = (propName, propValue) => {
    setNewStudent({
      ...newStudent,
      [propName]: propValue,
    });
  };

  const saveStudent = () => {
    const check = checkField();

    if (check) {
      createStudent(newStudent);
      navigate("/");
    }
  };

  const checkField = () => {
    let isError = false;
    if (!newStudent.name || newStudent.name === "") {
      setErrorMessageState({
        ...errorMessageState,
        name: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.lastName || newStudent.lastName === "") {
      setErrorMessageState({
        ...errorMessageState,
        lastName: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.email || newStudent.email === "") {
      setErrorMessageState({
        ...errorMessageState,
        email: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.boughtCourse || newStudent.boughtCourse === "") {
      setErrorMessageState({
        ...errorMessageState,
        boughtCourse: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (!newStudent.userName || newStudent.userName === "") {
      setErrorMessageState({
        ...errorMessageState,
        userName: ERROR_MESSAGE,
      });
      isError = true;
    }
    if (isError) {
      return false;
    } else {
      return true;
    }
  };

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Crear nuevo alumno</h1>
      <div>
        <div>
          <span>
            Nombre: <span className="red-text"> *</span>{" "}
          </span>
          <input
            type="text"
            onChange={(e) => newStudentHandler("name", e.target.value)}
          />
          {errorMessageState.name && <span className="red-text">{errorMessageState.name}</span>}
        </div>
        <div>
          <span>
            Apellidos: <span className="red-text"> *</span>{" "}
          </span>
          <input
            type="text"
            onChange={(e) => newStudentHandler("lastName", e.target.value)}
          />
        </div>
        <div>
          <span>
            Correo electrónico: <span className="red-text"> *</span>{" "}
          </span>
          <input
            type="text"
            onChange={(e) => newStudentHandler("email", e.target.value)}
          />
        </div>
        <div>
          <span>
            Curso que compra: <span className="red-text"> *</span>{" "}
          </span>
          <input
            type="text"
            onChange={(e) => newStudentHandler("boughtCourse", e.target.value)}
          />
        </div>
        <div>
          <span>
            Nombre de usuario: <span className="red-text"> *</span>{" "}
          </span>
          <input
            type="text"
            onChange={(e) => newStudentHandler("userName", e.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={saveStudent}>Guardar</button>
        <button onClick={backToHome}>Cancelar</button>
      </div>
    </div>
  );
};

export default CreateStudentPage;
