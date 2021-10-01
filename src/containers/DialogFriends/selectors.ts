import { GlobalState, User } from "../../types";
import { DialogState } from "./types";
import { createSelector } from "reselect";
import _ from "lodash";

const selectDialogDomain = (globalState: GlobalState): DialogState =>
  globalState.dialog;

const makeSelectOpenDialog = () =>
  createSelector(selectDialogDomain, (dialogState: DialogState) =>
    _.get(dialogState, "open", false)
  );

const makeSelectError = () =>
  createSelector(selectDialogDomain, (dialogState: DialogState) =>
    _.get(dialogState, "error", "")
  );

const makeSelectUsers = () =>
  createSelector(selectDialogDomain, (dialogState: DialogState): User[] =>
    _.get(dialogState, "users", []) as User[]
  );
const makeSelectedUser = () =>
  createSelector(
    selectDialogDomain,
    (dialogState: DialogState) => _.get(dialogState, "selectedUser", {}) as User
  );

const makeSelectUserId = () =>
  createSelector(makeSelectedUser(), (selectedUser: User) =>
    _.get(selectedUser, "id", "")
  );

const makeSelectedUserName = () =>
  createSelector(makeSelectedUser(), (selectedUser: User) =>
    _.get(selectedUser, "name", "")
  );
const makeSelectLoading = () =>
  createSelector(selectDialogDomain, (dialogState: DialogState) =>
    _.get(dialogState, "loading", false)
  );
export {
  makeSelectOpenDialog,
  makeSelectError,
  makeSelectUsers,
  makeSelectedUser,
  makeSelectUserId,
  makeSelectedUserName,
  makeSelectLoading,
};
