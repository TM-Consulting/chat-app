import { User } from "../../types";
interface DialogState {
  open: boolean;
  loading: boolean;
  error: boolean;
  users: User[] | null;
  selectedUser: User | null;
}

export { DialogState };
