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
  propId: string | null;
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
    // const colRef = collection(db, "users", uid, "units");
    const colRef = collection(db, "units");
    const addedDoc = await addDoc(colRef, {
      uid,
      propId,
      unitName,
      unitFloor,
      unitStatus,
      timeStamp: serverTimestamp()
    });
  } catch (e) {
    console.log(e);
  }
};
