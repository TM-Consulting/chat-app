import firebase from "firebase";
import "firebase/database";
 let config = {
    apiKey: "AIzaSyAV9hGXqBuAVaUj9saG30r-qy-2uXNXtXI",
    authDomain: "chat-app-c5f12.firebaseapp.com",
    databaseURL: "https://chat-app-c5f12-default-rtdb.firebaseio.com",
    projectId: "chat-app-c5f12",
    storageBucket: "chat-app-c5f12.appspot.com",
    messagingSenderId: "784028167085",
    appId: "1:784028167085:web:ccc209dfeb3c71e2008f24"
};

firebase.initializeApp(config);

export default firebase.database();