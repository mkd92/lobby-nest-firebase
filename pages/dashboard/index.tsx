import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { selectUser } from "../../app/authSlice/authSlice";
import { useAppSelector } from "../../app/hooks";
import Properties from "../../components/properties/Properties";
import Transactions from "../../components/Transactions";
import Units from "../../components/units/Units";
import styles from "../../styles/Dashboard.module.scss";
import { Box, Paper } from "@mui/material";
const Dashboard = () => {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/");
  }, []);
  return (
    <Box
      sx={{
        height: "92vh",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "20rem auto",
        gridTemplateRows: "1fr 1fr",
        gap: "1rem",
        padding: "2rem"
      }}
    >
      <Paper elevation={1} sx={{ overflow: "auto" }}>
        <Properties />
      </Paper>
      <Paper>
        <Units />
      </Paper>
      <Paper sx={{ gridColumnStart: "1", gridColumnEnd: "3" }}>
        <Transactions />
      </Paper>
    </Box>
  );
};
export default Dashboard;
