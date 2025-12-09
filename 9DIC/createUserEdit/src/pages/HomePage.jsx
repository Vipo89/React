import React, { useState } from "react";
import { createUserFetch, getUsersFetch } from "../services/usersFetch";
import InfoUserComponent from "../components/InfoUserComponent";
import { useEffect } from "react";
import UserDetailComponent from "../components/UserDetailComponent";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userUserEmail, setUserEmail] = useState("");

  const [userList, SetUserList] = useState([]);

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [selectedUser, SetSelectedUser] = useState(null);

  const loadUsers = () => {
    SetUserList(getUsersFetch());
  };

  const newUseHandler = (propName, propValue) => {
    const aux = {
      ...newUser,
      [propName]: propValue,
    };
    setNewUser(aux);
  };

  const createUser = () => {
    createUserFetch(newUser);
    const updatedList = getUsersFetch();
    SetUserList(updatedList);
    setNewUser({ username: "", password: "", email: "" });

    SetSelectedUser(updatedList[updatedList.length - 1]);
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <>
      {!selectedUser ? (
        <div>
          <h2>Creación de usuario</h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <label>
              Username:
              <input
                type="text"
                onChange={(e) => newUseHandler("username", e.target.value)}
                value={newUser.username}
              />
            </label>

            <label>
              Password:
              <input
                type="text"
                onChange={(e) => newUseHandler("password", e.target.value)}
                value={newUser.password}
              />
            </label>

            <label>
              Email:
              <input
                type="text"
                onChange={(e) => newUseHandler("email", e.target.value)}
                value={newUser.email}
              />
            </label>

            <button onClick={createUser}>Crear usuario</button>
          </div>
          <hr />
          <div>
            <h2>
              Información del usuario
              <div>
                {userList.length === 0 ? (
                  <p>No hay usuarios</p>
                ) : (
                  userList.map((user, idx) => (
                    <InfoUserComponent user={user} key={idx} />
                  ))
                )}
              </div>
            </h2>
          </div>
        </div>
      ) : (
        <div>
          <UserDetailComponent
            user={selectedUser}
            backbtn={() => SetSelectedUser(null)}
            refresh={() => {
              const updatedList = getUsersFetch();
              SetUserList(updatedList);

              const updatedUser = updatedList.find(
                (u) => u.id === selectedUser.id
              );
              SetSelectedUser(updatedUser);
            }}
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
