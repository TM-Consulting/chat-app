import { User } from "../../types";

interface FriendsState {
  loading: boolean; // true
  error: boolean;
  currentFriend: User | null;
  friendList: User[] | null;
}

export { FriendsState };
