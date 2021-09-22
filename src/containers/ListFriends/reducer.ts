import { ActionsTypes } from "./constants";
import { FriendsState } from "./types";

const initialState: FriendsState = {
  loading: true,
  error: false,
  currentFriend: null,
  friendList: null,
};

const friendsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionsTypes.SET_CURRENT_FRIEND:
      return "";
    case ActionsTypes.REQUEST_FRIENDS_LIST_SUCCESS:
      return "";
    case ActionsTypes.REQUEST_FRIENDS_LIST_ERROR:
      return "";
    default:
      return state;
  }
};

export default friendsReducer;
