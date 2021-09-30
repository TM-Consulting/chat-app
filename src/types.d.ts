import { AuthState } from "./containers/Account/types";
import { AppState } from "./containers/App/types";
import { ChatState } from "./containers/ChatBody/types";
import { DialogState } from "./containers/DialogFriends/types";
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
  dialog: DialogState;
  app: AppState;
}

export { User, GlobalState };
