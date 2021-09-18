import firebase from "../firebase";

const db = firebase.ref("/profile");

export const FirebaseProfile=()=> {
    const getAll = () => {
        return db;
      };
      const create = (data:any) => {
        return db.add(data);
      };
      const update = (id:any, value:any) => {
        return db.doc(id).update(value);
      };
      const remove = (id:any) => {
        return db.doc(id).delete();
      };
    
      return { getAll, create, update, remove };
};

 