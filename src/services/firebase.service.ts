import firebase from "../firebase";

 
export const FirebaseProfile=(provider:any)=> {
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

 