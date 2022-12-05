import { Box, Paper } from "@mui/material";
import React from "react";
import { colors } from "../../../styles/colors";

const Tenants = () => {
  return (
    <Box
      sx={{
        height: "85vh",
        bgcolor: colors.background,
        display: "grid",
        gridTemplateColumns: "30% 1fr",
        padding: "2rem",
        gap: "2rem"
      }}
    >
      <Paper elevation={3}>Tenants</Paper>
      <Paper elevation={3}>Options</Paper>
    </Box>
  );
};

export default Tenants;
