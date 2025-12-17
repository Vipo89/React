import { CHANGE_USER_FAV, LOAD_USERS, SELECT_USER } from './UsersComponentActions';

const initialState = {
  users: undefined,
  userSelected: undefined,
};

const usersComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload.usersData,
      };
    case SELECT_USER:
      return {
        ...state,
        userSelected: action.payload.userData,
      };

      case CHANGE_USER_FAV:
      return {
        ...state,
        // users: state.users.find((u) => u.id === action.payload.userId).fav ? (users.fav === false) : (users.fav === true)
        users : state.users.map((u) => u.id === action.payload.userId ? ({...u, fav: !u.fav}) :(u))
      }
      
    default:
      return state;
  }
};

export default usersComponentReducer;
