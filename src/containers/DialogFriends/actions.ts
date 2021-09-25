import { ActionsTypes } from "./constants";

const requestUers = () => {
  return {
    type: ActionsTypes.REQUEST_USERS_LIST,
  };
};
const requestUsersSuccess = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_USERS_LIST_SUCCESS,
    payload,
  };
};
const requestUsersError = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_USERS_LIST_ERROR,
    payload,
  };
};

const setSelecterUser = (payload: {}) => {
  return {
    type: ActionsTypes.SET_SELECTED_USER,
    payload,
  };
};
export { requestUers, requestUsersSuccess, requestUsersError, setSelecterUser };
