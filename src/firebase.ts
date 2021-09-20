import firebase from "firebase";
import "firebase/database";
import { firebaseConfig } from "./variables";
let config = {
  ...firebaseConfig,
};

firebase.initializeApp(config);

export default firebase.database();
