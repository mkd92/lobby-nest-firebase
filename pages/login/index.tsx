import { Box } from "@mui/material";
import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import { colors } from "../../styles/colors";

const LoginPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.dark.background,
        height: "93vh",
        marginTop: "0",
      }}
    >
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
