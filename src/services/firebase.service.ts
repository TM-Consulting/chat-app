import firebase from "../firebase";
import { firebaseAuth } from "../firebase";
 
export const FirebaseProfile=(provider:string)=> {
  const db = firebase.ref(provider);
    return {
       getAll : () => {
        return db;
      },
       create : (data:any) => {
        return db.add(data);
      },
       update : (id:any, value:any) => {
        return db.doc(id).update(value);
      },
       remove : (id:any) => {
        return db.doc(id).delete();
      },
    }    
};
export const authServise = () => {
  const auth = firebaseAuth;
  const signUp = async (email:string, password:string) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      return res.user;
    } catch (err:any) {


      return err.message
    }
  };
  const signIn = async (email:string, password:string) => {
    try {
      await auth.signInWithEmailAndPassword(email, password).then(() => {
        return auth.currentUser
      });
    } catch (err:any) {

      return err.message;
    }
  };
  const logout = () => {
    auth.signOut();
  };

  return { signIn, signUp, logout }
};
 