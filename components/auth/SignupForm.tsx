import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState
} from "react";
import { addUser, selectUser } from "../../app/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "../../styles/Form.module.scss";
import { auth, db } from "../../utils/firebase/firebase";

const SignupForm = () => {
  const user = useAppSelector(selectUser);

  const router = useRouter();
  if (user) {
    router.push("/dashboard");
  }
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createUserInput = {
      email: formData.email,
      password: formData.password
    };
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        createUserInput.email,
        createUserInput.password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: `${formData.firstName} ${formData.lastName}`
      });
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email
      });
      dispatch(addUser(userCredential.user));
      router.push("/login");
    } catch (e) {
      console.log(e);
    }
  };
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).value;
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;
    const newState = formData;
    newState[name as keyof typeof formData] = value;
    setFormData(newState);
    // console.log(formData);
  };
  return (
    <div className={styles.signupContainer}>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <div className={styles.name}>
          <input
            type="text"
            className={styles.input}
            placeholder="First Name"
            name="firstName"
            onChange={handleOnChange}
          />
          <span className={styles.space} />
          <input
            type="text"
            className={styles.input}
            name="lastName"
            placeholder="Last Name"
            onChange={handleOnChange}
          />
        </div>
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
        <input
          type="text"
          className={styles.input}
          placeholder="Confirm Password"
          onChange={handleOnChange}
          name="confirmPassword"
        />
        <button className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
