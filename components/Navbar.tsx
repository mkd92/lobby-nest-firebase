import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography
} from "@mui/material";
import { letterSpacing } from "@mui/system";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { logout, selectUser } from "../app/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import styles from "../styles/Navbar.module.scss";
import { auth } from "../utils/firebase/firebase";
import LogoutBtn from "./LogoutBtn";

const index = () => {
  const user = useAppSelector(selectUser);
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

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "roboto",
              fontWeight: 700,
              letterSpacing: "none",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Lobby
          </Typography>
          {!user
            ? <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  component={Link}
                  href="/signup"
                  variant="outlined"
                  color="secondary"
                  // sx={{ color: "#242424", display: "block" }}
                >
                  Signup
                </Button>
                <Button
                  component={Link}
                  href="/login"
                  variant="outlined"
                  color="secondary"
                  sx={{ marginLeft: "1rem " }}
                >
                  Login
                </Button>
              </Box>
            : <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  component={Link}
                  variant={
                    router.asPath === "/user/tenant" ? "outlined" : "text"
                  }
                  href="/user/tenant"
                  color="secondary"
                  sx={{
                    marginLeft: "1rem"
                  }}
                >
                  Tenant
                </Button>
                <Button
                  component={Link}
                  variant={router.asPath === "/dashboard" ? "outlined" : "text"}
                  href="/dashboard"
                  color="secondary"
                  sx={{
                    marginLeft: "1rem"
                  }}
                >
                  Dashboard
                </Button>
                <Button
                  variant="text"
                  color="secondary"
                  sx={{
                    marginLeft: "1rem"
                  }}
                  onClick={onClickHandler}
                >
                  Logout
                </Button>
              </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default index;
