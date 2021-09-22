import { actionsTypes } from "./constants";

const initialState = {
  user: {},
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
