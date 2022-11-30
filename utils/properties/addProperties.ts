import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc
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
  try {
    const { uid, data } = addPropertyInput;
    const document = await addDoc(collection(db, "users", uid, "properties"), {
      ...data,
      timeStamp: serverTimestamp()
    });
    const propId = document.id;
    const docRef = doc(db, "users", uid, "properties", propId);
    const updatedDoc = await updateDoc(docRef, {
      propId
    });
    const propSnap = await getDoc(docRef);

    if (propSnap.exists()) {
      return propSnap;
    }
  } catch (e) {
    return null;
  }
};
