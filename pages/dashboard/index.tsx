import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { selectUser } from "../../app/authSlice/authSlice";
import { useAppSelector } from "../../app/hooks";
import Properties from "../../components/Properties";
import Transactions from "../../components/Transactions";
import Units from "../../components/Units";
import styles from "../../styles/Dashboard.module.scss";

const Dashboard = () => {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/");
  }, []);
  return (
    <div className={styles.container}>
      <div className={[styles.section, styles.properties].join(" ")}>
        <Properties />
      </div>
      <div className={[styles.section, styles.units].join(" ")}>
        <Units />
      </div>
      <div className={[styles.section, styles.transactions].join(" ")}>
        <Transactions />
      </div>
    </div>
  );
};
export default Dashboard;
