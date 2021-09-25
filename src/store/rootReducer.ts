import { combineReducers } from "redux";
import authReducer from "../containers/Account/reducer";
import chatReducer from "../containers/ChatBody/reducer";
import dialogReducer from "../containers/DialogFriends/reducer";
import friendsReducer from "../containers/ListFriends/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  friends: friendsReducer,
  dialog: dialogReducer,
});

export default rootReducer;
