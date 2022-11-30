import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc
} from "firebase/firestore";
import { PropertyState } from "../../app/propertySlice/propertySlice";
import { db } from "../firebase/firebase";

interface AddPropertyInputType {
  uid: string;
  data: PropertyState;
}
export const addPropertyUtil = async (
  addPropertyInput: AddPropertyInputType
) => {
  // setDoc(doc(db,))
  const { uid, data } = addPropertyInput;
  const document = await addDoc(collection(db, "users", uid, "properties"), {
    ...data,
    timeStamp: serverTimestamp()
  });
  const propSnap = await getDoc(document);
  if (propSnap.exists()) {
    return propSnap;
  }
  return null;
};
