import { GlobalState, User } from "../../types";
import { AuthState } from "./types";
import { createSelector } from "reselect";
import _ from "lodash";

const selectAuthDomain = (globalState: GlobalState): AuthState =>
  globalState.auth;

const makeSelectError = () =>
  createSelector(selectAuthDomain, (authState: AuthState) =>
    _.get(authState, "error", false)
  );

const makeSelectErrorMessage = () =>
  createSelector(selectAuthDomain, (authState: AuthState) =>
    _.get(authState, "errorMessage", "")
  );

const makeSelectCurrentUser = () =>
  createSelector(
    selectAuthDomain,
    (authState: AuthState) => _.get(authState, "user", {}) as User
  );

const makeSelectCurrentUserId = () =>
  createSelector(makeSelectCurrentUser(), (currentUser: User) =>
    _.get(currentUser, "id", "")
  );

const makeSelectCurrentUserEmail = () =>
  createSelector(makeSelectCurrentUser(), (currentUser: User) =>
    _.get(currentUser, "email", "")
  );
const makeSelectCurrentUserName = () =>
  createSelector(makeSelectCurrentUser(), (currentUser: User) =>
    _.get(currentUser, "name", "")
  );

const makeSelectCurrentUserLogged = () =>
  createSelector(makeSelectCurrentUser(), (currentUser: User) =>
    _.get(currentUser, "isLogged", false)
  );

export {
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectCurrentUser,
  makeSelectCurrentUserId,
  makeSelectCurrentUserEmail,
  makeSelectCurrentUserName,
  makeSelectCurrentUserLogged,
};
