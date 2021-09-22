import { User } from "../../types";
interface AuthState {
  user: User | null;
  error: boolean;
  errorMessage: string;
}

export { AuthState };
