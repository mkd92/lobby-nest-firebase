import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { letterSpacing } from "@mui/system";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { logout, selectUser } from "../app/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { colors } from "../styles/colors";
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
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <AppBar position="static">
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
              color: colors.dark.textColor,
              textDecoration: "none",
            }}
          >
            Lobby
          </Typography>
          {!user ? (
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
            >
              <Button
                component={Link}
                href="/signup"
                variant="outlined"
                color={"secondary"}
              >
                Signup
              </Button>
              <Button
                component={Link}
                href="/login"
                color={"secondary"}
                variant="outlined"
                sx={{ marginLeft: "1rem" }}
              >
                Login
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
            >
              <Button color={"secondary"} sx={{ marginLeft: "1rem" }}>
                Tenants
              </Button>
              <Button
                color={"secondary"}
                onClick={onClickHandler}
                sx={{ marginLeft: "1rem" }}
              >
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default index;
