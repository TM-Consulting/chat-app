import { Routes } from "../../constants";
import { ActionsTypes } from "./constants";
import { AppState } from "./types";

const initialState: AppState = {
  currentPage: Routes.SIGN_IN,
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionsTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
