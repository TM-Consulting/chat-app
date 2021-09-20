import firebase from "firebase";
import "firebase/database";
import "firebase/auth";
import { firebaseConfig } from "./variables";
let config = {
  ...firebaseConfig,
};

firebase.initializeApp(config);
const firebaseAuth = firebase.auth();
const firebaseDb= firebase.database();

export {firebaseAuth,firebaseDb};