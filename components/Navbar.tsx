import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.scss";

const index = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          Lobby
        </Link>
        <div className={styles.spacing}>
          <Link href="/login" className={styles.links}>
            Login
          </Link>
          <Link href="/signup" className={styles.links}>
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default index;
