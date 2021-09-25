import { User } from "../../types";

export interface AuthState {
  user: User | null;
  error: boolean;
  errorMessage: string;
  formData: AuthFormData | null;
}

export interface AuthFormData {
  [email: string]: string | null;
  [password: string]: string | null;
  [confirm_password: string]: string | null;
  [name: string]: string | null;
}

export { AuthState };
