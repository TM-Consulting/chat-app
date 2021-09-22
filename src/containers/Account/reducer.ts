import { ActionsTypes } from "./constants";
import { AuthState } from "./types";

const initialState: AuthState = {
  user: null,
  error: false,
  errorMessage: "rah makayn erreur",
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_SIGN_IN_SUCCESS:
      return "";
    case ActionsTypes.REQUEST_SIGN_IN_ERROR:
      return "";
    case ActionsTypes.REQUEST_SIGN_UP_SUCCESS:
      return "";
    case ActionsTypes.REQUEST_SIGN_UP_ERROR:
      return "";
    case ActionsTypes.REQUEST_SIGN_OUT_SUCCESS:
      return "";
    case ActionsTypes.REQUEST_SIGN_OUT_ERROR:
      return "";
    default:
      return state;
  }
};

export default authReducer;
