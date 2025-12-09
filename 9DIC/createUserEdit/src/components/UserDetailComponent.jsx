import React, { useState } from "react";
import { deleteUserFetch, editUserFetch } from "../services/usersFetch";

const UserDetailComponent = (props) => {
  const { user, backbtn, refresh } = props;

  const [editUser, SetEditUser] = useState(false);

  const [editedUser, setEditedUser] = useState({ ...user });
  return (
    <>
      <div>
        <h2>Información del usuario</h2>
        {!editUser ? (
          <>
            <div>
              <p> Username: {user.username}</p>
              <p> Password: {user.password}</p>
              <p> Email: {user.email}</p>
            </div>
            <button onClick={() => SetEditUser(true)}>Editar</button>
            <button onClick={backbtn}>Volver</button>
          </>
        ) : (
          <>
            <div>
              <label>
                Username:{" "}
                <input
                  type="text"
                  value={editedUser.username}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, username: e.target.value })
                  }
                />
              </label>
              <label>
                Password:{" "}
                <input
                  type="text"
                  value={editedUser.password}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, password: e.target.value })
                  }
                />
              </label>
              <label>
                Email:{" "}
                <input
                  type="text"
                  value={editedUser.email}
                  onChange={(e) =>
                    setEditedUser({ ...editedUser, email: e.target.value })
                  }
                />
              </label>
            </div>
            <button
              onClick={() => {
                editUserFetch(user.id, editedUser);
                refresh();
                SetEditUser(false);
              }}
            >
              Guardar
            </button>
            <button onClick={() => SetEditUser(false)}>Cancelar</button>
            <button onClick={() => {deleteUserFetch(user.id);
                SetEditUser(false);
                refresh();}
            }>Eliminar</button>
            
          </>
        )}
      </div>
    </>
  );
};

export default UserDetailComponent;
