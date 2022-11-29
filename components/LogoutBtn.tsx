import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { logout, selectUser } from "../app/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { auth } from "../utils/firebase/firebase";

const LogoutBtn = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onClickHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        router.push("/");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return <button onClick={onClickHandler}>LogoutBtn</button>;
};

export default LogoutBtn;
