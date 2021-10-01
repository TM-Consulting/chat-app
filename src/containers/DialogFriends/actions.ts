import { User } from "../../types";
import { ActionsTypes } from "./constants";

const requestUers = () => {
  return {
    type: ActionsTypes.REQUEST_USERS_LIST,
  };
};
const requestUsersSuccess = (payload: User[]) => {
  return {
    type: ActionsTypes.REQUEST_USERS_LIST_SUCCESS,
    payload,
  };
};
const requestUsersError = () => {
  return {
    type: ActionsTypes.REQUEST_USERS_LIST_ERROR,
  };
};

const setSelecterUser = (payload: {}) => {
  return {
    type: ActionsTypes.SET_SELECTED_USER,
    payload,
  };
};
const setOpenDialog = (payload: boolean) => {
  return {
    type: ActionsTypes.SET_OPEN_DIALOG,
    payload,
  };
};
export {
  requestUers,
  requestUsersSuccess,
  requestUsersError,
  setSelecterUser,
  setOpenDialog,
};
