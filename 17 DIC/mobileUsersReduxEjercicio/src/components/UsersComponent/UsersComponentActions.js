export const LOAD_USERS = 'LOAD_USERS';
export const SELECT_USER = 'SELECT_USER';

export const CHANGE_USER_FAV = "CHANGE_USER_FAV"

export const loadUsersAction = (usersData) => {
  return {
    type: LOAD_USERS,
    payload: {
      usersData,
    },
  };
};

export const selectUserAction = (userData) => {
  return {
    type: SELECT_USER,
    payload: {
      userData,
    },
  };
};

export const changeUserFavAction = (userId) => {
return {
  type: CHANGE_USER_FAV,
  payload : {
    userId
  }
}
}
