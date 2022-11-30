import {
  doc,
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  getDoc,
  FieldValue
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export interface AddUnitsInput {
  uid: string;
  propId: string;
  unitName: string;
  unitFloor: number;
  unitStatus: "VACANT" | "BOOKED" | "OCCUPIED";
  timeStamp?: FieldValue;
  unitId?: string;
}
export const addUnitsUtils = async ({
  uid,
  propId,
  unitFloor,
  unitName,
  unitStatus
}: AddUnitsInput) => {
  try {
    const colRef = collection(db, "users", uid, "units");
    const addedDoc = await addDoc(colRef, {
      unitName,
      unitFloor,
      unitStatus,
      timeStamp: serverTimestamp()
    });
    const unitId = addedDoc.id;
    const docRef = doc(db, "users", uid, "units", unitId);
    await updateDoc(docRef, {
      unitId,
      propId,
      uid
    });
  } catch (e) {
    console.log(e);
  }
};
