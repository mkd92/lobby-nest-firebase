import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import styles from "../../styles/Form.module.scss";
import { createUser } from "../../utils/firebase/signup";
const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createUserInput = {
      email: formData.email,
      password: formData.password,
    };
    const user = await createUser(createUserInput);
    console.log(user);
  };
  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).value;
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;
    const newState = formData;
    newState[name as keyof typeof formData] = value;
    setFormData(newState);
    console.log(formData);
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
          <span className={styles.space}></span>
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
