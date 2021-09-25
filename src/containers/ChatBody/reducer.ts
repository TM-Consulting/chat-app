import { ActionsTypes } from "./constants";
import { ChatState } from "./types";

const initialState: ChatState = {
  loading: true,
  error: false,
  messages: null,
};

const chatReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionsTypes.REQUEST_CHAT_MESSAGES_SUCESS:
      return "";
    case ActionsTypes.REQUEST_CHAT_MESSAGES_ERROR:
      return "";
    default:
      return state;
  }
};

export default chatReducer;
