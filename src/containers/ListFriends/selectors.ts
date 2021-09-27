import { GlobalState, User } from "../../types";
import { FriendsState } from "./types";
import { createSelector } from "reselect";
import _ from "lodash";

const selectFriendsDomain = (globalState: GlobalState): FriendsState =>
  globalState.friends;

const makeFriendsError = () =>
  createSelector(selectFriendsDomain, (friendsState: FriendsState) =>
    _.get(friendsState, "error", false)
  );

const makeFriendsLoading = () =>
  createSelector(selectFriendsDomain, (friendsState: FriendsState) =>
    _.get(friendsState, "loading", false)
  );

const makeSelectCurrentFriend = () =>
  createSelector(
    selectFriendsDomain,
    (friendsState: FriendsState) => _.get(friendsState, "friends state", {}) as FriendsState
  );

const makeSelectCurrentFriendId = () =>
  createSelector(makeSelectCurrentFriend(), (currentFriend: FriendsState) =>
    _.get(currentFriend, "id", "")
  );

const makeSelectCurrentFriendEmail = () =>
  createSelector(makeSelectCurrentFriend(), (currentFriend: FriendsState) =>
    _.get(currentFriend, "email", "")
  );
const makeSelectCurrentUserName = () =>
  createSelector(makeSelectCurrentFriend(), (currentFriend: FriendsState) =>
    _.get(currentFriend, "name", "")
  );

  const makeSelectFriendList = () =>
  createSelector(
    selectFriendsDomain,
    (friendsState: FriendsState) => _.get(friendsState, "friendList", {}) as FriendsState[]
  );

export {
    makeFriendsError,
    makeFriendsLoading,
  makeSelectCurrentFriend,
  makeSelectCurrentFriendId,
  makeSelectCurrentFriendEmail,
  makeSelectCurrentUserName,
  makeSelectFriendList,
};