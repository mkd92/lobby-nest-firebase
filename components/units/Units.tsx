import React, { useState } from "react";
import { Grid, Modal, Typography, Box } from "@mui/material";
import AddUnitButton from "./AddUnitButton";
import AddUnitForm from "./AddUnitForm";

const Units = () => {
  const [open, setOpen] = useState(false);
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
  const openModelHandler = () => {
    setOpen(true);
  };
  const closeModelHandler = () => {
    setOpen(false);
  };
  return (
    <Grid
      container
      sx={{
        padding: "1rem"
      }}
    >
      <Modal open={open} onClose={closeModelHandler}>
        <Box sx={modalBoxStyle}>
          <Typography>Modal</Typography>
          <AddUnitForm />
        </Box>
      </Modal>
      <Grid
        item
        xs={2}
        sx={{
          height: "10rem"
        }}
      >
        <AddUnitButton openModel={openModelHandler} />
      </Grid>
    </Grid>
  );
};

export default Units;
