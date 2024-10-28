import { act } from "react";

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [],
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      const loggedUser = state.users.find(
        (user) => user.email === action.payload.email
      );
      if (loggedUser && loggedUser.password === action.payload.password) {
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      } else {
        alert("invalid user");
      }
    case "logout":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "signup":
      return {
        ...state,
        users:[...state.users,action.payload],
        isAuthenticated: true,
        user: action.payload,
      };
      default:
        return state;
  }
};
