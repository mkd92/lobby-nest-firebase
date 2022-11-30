import React from "react";
import { Button } from "@mui/material";
interface AddUnitButtonInput {
  openModel: () => void;
}
const AddUnitButton = ({ openModel }: AddUnitButtonInput) => {
  return (
    <Button
      onClick={openModel}
      variant="contained"
      sx={{ height: "100%", width: "100%", borderRadius: "1rem" }}
    >
      AddUnitButton
    </Button>
  );
};

export default AddUnitButton;
