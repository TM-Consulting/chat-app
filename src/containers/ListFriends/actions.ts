import { ActionsTypes } from "./constants";

const setCurrentFriend = (payload: {}) => {
  return {
    type: ActionsTypes.SET_CURRENT_FRIEND,
    payload,
  };
};
const requestFiendsList = () => {
  return {
    type: ActionsTypes.REQUEST_FRIENDS_LIST,
  };
};

const requestFiendsListSuccess = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_FRIENDS_LIST_SUCCESS,
    payload,
  };
};
const requestFiendsListError = () => {
  return {
    type: ActionsTypes.REQUEST_FRIENDS_LIST_ERROR,
  };
};
export {
  setCurrentFriend,
  requestFiendsList,
  requestFiendsListSuccess,
  requestFiendsListError,
};
