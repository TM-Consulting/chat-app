import { AuthState } from "./containers/Account/types";
import { ChatState } from "./containers/ChatBody/types";
import { FriendsState } from "./containers/ListFriends/types";

interface User {
  id: string;
  email: string;
  name: string;
  isLogged: boolean;
}

interface GlobalState {
  auth: AuthState;
  chat: ChatState;
  friends: FriendsState;
}

export { User, GlobalState };
