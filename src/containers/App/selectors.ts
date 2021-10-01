import { GlobalState } from "../../types";
import { AppState } from "./types";
import { createSelector } from "reselect";
import _ from "lodash";
import { Routes } from "../../constants";

const selectChatDomain = (globalState: GlobalState): AppState =>
  globalState.app;

const makeSelectCurrentPage = () =>
  createSelector(selectChatDomain, (appState: AppState) =>
    _.get(appState, "currentPage", Routes.SIGN_IN)
  );

export { makeSelectCurrentPage };
