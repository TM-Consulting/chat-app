import { chatCollectionName } from "../../constants";
import { firebaseDb } from "../../firebase";

const db = firebaseDb.ref(chatCollectionName);

export const getAll = () => {
  return db;
};
export const create = (data: any) => {
  return db.add(data);
};
