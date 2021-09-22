import { ActionsTypes } from "./constants";

const requestChatMessages = () => {
  return {
    type: ActionsTypes.REQUEST_CHAT_MESSAGES,
  };
};

const requestChatMessagesSuccess = (payload: {}) => {
  return {
    type: ActionsTypes.REQUEST_CHAT_MESSAGES_SUCESS,
    payload,
  };
};
const requestChatMessagesError = () => {
  return {
    type: ActionsTypes.REQUEST_CHAT_MESSAGES_ERROR,
  };
};
export {
  requestChatMessages,
  requestChatMessagesSuccess,
  requestChatMessagesError,
};
