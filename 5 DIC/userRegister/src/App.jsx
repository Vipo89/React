import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  // Usando varios useState
  /*
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  */
  const [newUser, setNewUser] = useState({
    userName: '',
    password: '',
    secondPassword: '',
  });
  const [alertMessage, setAlertMessge] = useState('');

  const newUserHandler = (nameProp, newValueProp) => {
    setNewUser({
      // Copia de un objeto superficial para editgar las propiedades. Esto grabaroslo a fuego
      ...newUser,
      // Para añadir o mdificar propiedades de form dinamica, en JS se hace con [prop]: valor
      [nameProp]: newValueProp,
    });
  };

  const checkFields = () => {
    if (newUser.userName.length < 3) {
      setAlertMessge('Algun campo no cumple las condiciones');
    } else if (newUser.password.length < 8) {
      setAlertMessge('Algun campo no cumple las condiciones');
    } else if (newUser.password !== newUser.secondPassword) {
      setAlertMessge('Algun campo no cumple las condiciones');
    } else {
      setAlertMessge(undefined);
    }
  };

  useEffect(() => {
    checkFields();
  }, [newUser]);

  return (
    <>
      <div>
        <h2>Registro de usuarrio</h2>
      </div>
      <p>{alertMessage}</p>
      <div>
        <div>
          <span>Username</span>
          <input
            type="text"
            onChange={(e) => newUserHandler('userName', e.target.value)}
          />
        </div>
        <div>
          <span>Contraseña</span>
          <input
            type="text"
            onChange={(e) => newUserHandler('password', e.target.value)}
          />
        </div>
        <div>
          <span>Repite contraseña</span>
          <input
            type="text"
            onChange={(e) => newUserHandler('secondPassword', e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
