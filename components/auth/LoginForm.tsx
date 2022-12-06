import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import { signInWithEmailAndPassword, User } from "firebase/auth";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { addUser, selectUser } from "../../app/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "../../styles/Form.module.scss";
import { auth } from "../../utils/firebase/firebase";
import { colors } from "../../styles/colors";

const LoginForm = () => {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  if (user) {
    router.push("/dashboard");
  }
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          dispatch(addUser(user));
          router.push("/dashboard");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ display: "flex" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: colors.dark.dark1,
            width: "40rem",
            height: "40rem",
            margin: "auto",
            borderRadius: "2rem",
          }}
        >
          <Box sx={{ display: "grid", gap: "2rem", margin: "2rem" }}>
            <TextField type="text" placeholder="Email" name="email" fullWidth />
            <TextField type="text" placeholder="Password" name="password" />
            <Button
              sx={{
                backgroundColor: colors.dark.light1,
                color: colors.dark.background,
              }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginForm;
