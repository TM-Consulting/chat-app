import { GlobalState, User } from "../../types";
import { ChatState } from "./types";
import { Message } from "./types";
import { createSelector } from "reselect";
import _ from "lodash";

const selectChatDomain = (globalState: GlobalState): ChatState =>
  globalState.chat;

const makeSelectError = () =>
  createSelector(selectChatDomain, (chatState: ChatState) =>
    _.get(chatState, "error", false)
  );

const makeSelectLoading = () =>
  createSelector(selectChatDomain, (chatState: ChatState) =>
    _.get(chatState, "loading", false)
  );

const makeSelectMessages = () =>
  createSelector(
    selectChatDomain,
    (chatState: ChatState) => _.get(chatState, "messages", {}) as Message[]
  );

export { makeSelectError, makeSelectLoading, makeSelectMessages };
