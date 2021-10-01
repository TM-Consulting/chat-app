import { User } from "../../types";

export interface AuthState {
  user: User | null;
  error: boolean;
  errorMessage: string;
  formData: AuthFormData | null;
}

export interface AuthFormData {
  email: string | null;
  password: string | null;
  confirm_password: string | null;
  name: string | null;
}
interface AuthResponse {
  error: boolean;
  message: string;
  data: any;
}

export { AuthState, AuthFormData, AuthResponse };
