import { actionsTypes } from "./constants";

export const userLogin = (payload: {}) => {
  return {
    type: actionsTypes.USER_LOGIN,
    payload,
  };
};

export const userLogout = (payload: {}) => {
  return {
    type: actionsTypes.USER_LOGOUT,
    payload,
  };
};

export const userSignUp = (payload: {}) => {
  return {
    type: actionsTypes.USER_SIGNUP,
    payload,
  };
};
