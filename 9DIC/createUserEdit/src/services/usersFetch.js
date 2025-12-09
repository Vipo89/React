

let users = [
  {
    id: 1,
    username: "juan23",
    password: "1234abcd",
    email: "juan@example.com",
  },
//   {
//     id: 2,

//     username: "maria_dev",
//     password: "pass4321",
//     email: "maria@example.com",
//   },
//   {
//     id: 3,
//     username: "victor",
//     password: "qwerty987",
//     email: "victor@example.com",
//   },
];

export const getUsersFetch = () => {
  return [...users];
};


export const createUserFetch = (newUser) => {
  const maxId = users
    .map((user) => user.id)
    .sort((a, b) => b - a)[0];

  const aux = {
    ...newUser,
    id: maxId + 1,
  };

  users.push(aux);
};

export const editUserFetch = (idUser,editedUser) => {
    const auxEditedUser = {
        ...editedUser,
        id: idUser
    };

    const auxlist = users.filter((p) => p.id !== idUser);
    auxlist.push(auxEditedUser)
    users = auxlist.sort((a,b) => a.id - b.id)
}

export const deleteUserFetch = (idUser) => {
    users = users.filter((p) => p.id !== idUser)
}