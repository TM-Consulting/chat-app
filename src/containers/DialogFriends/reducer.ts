import { ActionsTypes } from "./constants";
import { DialogState } from "./types";

const initialState: DialogState = {
  open: false,
  loading: true,
  error: false,
  users: null,
  selectedUser: null,
};

const dialogReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_USERS_LIST_SUCCESS:
      return "";
    case ActionsTypes.REQUEST_USERS_LIST_ERROR:
      return "";
    case ActionsTypes.SET_SELECTED_USER:
      return "";
    case ActionsTypes.SET_OPEN_DIALOG:
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};

export default dialogReducer;
