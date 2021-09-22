import { actionsTypes } from "./constants";
import { AuthState } from "./types";

const initialState: AuthState = {
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.USER_LOGIN:
      return "";
    case actionsTypes.USER_LOGOUT:
      return "";
    case actionsTypes.USER_SIGNUP:
      return "";
    default:
      return state;
  }
};

export default authReducer;

/* {
      id: null,
      name: null,
      email: null,
      isLogged: false,
  } */
