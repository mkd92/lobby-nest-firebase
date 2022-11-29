import Link from "next/link";
import React from "react";
import { selectUser } from "../app/authSlice/authSlice";
import { useAppSelector } from "../app/hooks";
import styles from "../styles/Navbar.module.scss";
import LogoutBtn from "./LogoutBtn";

const index = () => {
  const user = useAppSelector(selectUser);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          Lobby
        </Link>
        {!user
          ? <div className={styles.spacing}>
              <Link href="/login" className={styles.links}>
                Login
              </Link>
              <Link href="/signup" className={styles.links}>
                Signup
              </Link>
            </div>
          : <div className={styles.spacing}>
              <LogoutBtn />
            </div>}
      </div>
    </nav>
  );
};

export default index;
