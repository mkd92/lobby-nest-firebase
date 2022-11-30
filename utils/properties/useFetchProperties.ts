import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { selectUser } from "../../app/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectProperties,
  updateProperties
} from "../../app/propertySlice/propertySlice";
import { db } from "../firebase/firebase";

export const useFetchProperties = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const properties = useAppSelector(selectProperties);

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      const q = query(
        collection(db, "users", uid, "properties"),
        orderBy("timeStamp")
      );
      const unSubscribe = onSnapshot(q, snapshot => {
        dispatch(updateProperties(snapshot.docs.map(doc => doc.data())));
      });
      return () => {
        unSubscribe();
      };
    }
  }, []);

  return properties;
};
