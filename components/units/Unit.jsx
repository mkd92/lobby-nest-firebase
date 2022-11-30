import { Button } from "@mui/material";
import React from "react";

const Unit = ({ unit }) => {
  return (
    <Button
      variant="outlined"
      sx={{ height: "100%", width: "100%", borderRadius: "1rem" }}
    >
      {unit.unitName}
    </Button>
  );
};

export default Unit;
