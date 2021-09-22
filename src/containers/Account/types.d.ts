interface AuthState {
  user: User | null;
}

interface User {
  id: string;
  email: string;
  name: string;
  isLogged: boolean;
}

export { AuthState };
