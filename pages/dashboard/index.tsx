import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { selectUser } from "../../app/authSlice/authSlice";
import { useAppSelector } from "../../app/hooks";
import Properties from "../../components/properties/Properties";
import Transactions from "../../components/transactions/Transactions";
import Units from "../../components/units/Units";
import styles from "../../styles/Dashboard.module.scss";
import {
  Box,
  Fab,
  Modal,
  Paper,
  TableContainer,
  Typography
} from "@mui/material";
import { Add } from "@mui/icons-material";
import AddTransactionForm from "../../components/transactions/AddTransactionForm";
const modalBoxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 2,
  p: 4
};
const Dashboard = () => {
  const user = useAppSelector(selectUser);
  const [transModel, setTransModel] = useState(false);
  const router = useRouter();
  const transModelToggle = () => {
    setTransModel(!transModel);
  };
  useEffect(() => {
    if (!user) router.push("/");
  }, []);
  return (
    <div>
      <Modal open={transModel} onClose={transModelToggle}>
        <Box sx={modalBoxStyle}>
          <Typography>Add Transactions</Typography>
          <AddTransactionForm />
        </Box>
      </Modal>
      <Fab
        variant="extended"
        sx={{
          display: "flex",
          position: "fixed",
          right: "2rem",
          top: "92vh",
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={transModelToggle}
      >
        <Typography
          variant="button"
          sx={{ marginTop: "auto", marginBottom: "auto" }}
        >
          Add Transaction
        </Typography>
      </Fab>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "20rem auto",
          gap: "1rem",
          padding: "2rem"
        }}
      >
        <Paper elevation={1} sx={{ overflow: "auto", height: "40vh" }}>
          <Properties />
        </Paper>
        <Paper>
          <Units />
        </Paper>
        <TableContainer
          component={Paper}
          sx={{ gridColumnStart: "1", gridColumnEnd: "3" }}
        >
          <Transactions />
        </TableContainer>
      </Box>
    </div>
  );
};
export default Dashboard;
