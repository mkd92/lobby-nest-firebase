import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  where
} from "firebase/firestore";
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
        collection(db, "properties"),
        where("uid", "==", uid),
        orderBy("timeStamp")
      );
      const unSubscribe = onSnapshot(q, snapshot => {
        const properties: QueryDocumentSnapshot[] = [];
        snapshot.forEach(doc => {
          properties.push(doc);
        });
        dispatch(updateProperties(properties));
      });
      return () => {
        unSubscribe();
      };
    }
  }, []);

  return properties;
};
