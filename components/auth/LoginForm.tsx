import { signInWithEmailAndPassword, User } from "firebase/auth";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { addUser, selectUser } from "../../app/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "../../styles/Form.module.scss";
import { auth } from "../../utils/firebase/firebase";

const LoginForm = () => {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  if (user) {
    router.push("/dashboard");
  }
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).value;
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;
    const newState = formData;
    newState[name as keyof typeof formData] = value;
    setFormData(newState);
    // console.log(formData);
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(userCredentials => {
        const user = userCredentials.user;
        dispatch(addUser(user));
        router.push("/dashboard");
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className={styles.signupContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Email"
          name="email"
          onChange={handleOnChange}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Password"
          name="password"
          onChange={handleOnChange}
        />
        <button className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
