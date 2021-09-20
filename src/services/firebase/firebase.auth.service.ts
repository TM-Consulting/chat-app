import { firebaseAuth } from "../../firebase";

const auth = firebaseAuth;
const signUp = async (email: string, password: string) =>
  await auth.createUserWithEmailAndPassword(email, password);

const signIn = async (email: string, password: string) =>
  await auth.signInWithEmailAndPassword(email, password);

const logout = () => {
  auth.signOut();
};

export { signIn, signUp, logout };
