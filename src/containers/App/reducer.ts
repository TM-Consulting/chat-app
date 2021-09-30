import { ActionsTypes, Routes } from "./constants";
import { AppState } from "./types";

const initialState: AppState = {
  currentPage: Routes.CHAT,
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionsTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
      };

    default:
      return state;
  }
};

export default appReducer;
