import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  FormControl,
  Input,
  Box,
  Select,
  MenuItem,
  Button,
  TextField,
  InputProps
} from "@mui/material";
import { AddUnitsInput, addUnitsUtils } from "../../utils/units/addUnitsUtils";
import { useAppSelector } from "../../app/hooks";
import { selectSelectedPropId } from "../../app/propertySlice/propertySlice";
import { selectUser } from "../../app/authSlice/authSlice";

const AddUnitForm = () => {
  const propId = useAppSelector(selectSelectedPropId);
  const uid = useAppSelector(selectUser)?.uid;

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(uid){
      let formData: AddUnitsInput = {
        unitName: "",
        unitFloor: 0,
        unitStatus: "VACANT",
        propId: propId,
        uid: uid
      };
      data.forEach((value, key) => {
        formData = { ...formData, [key]: value };
      });
      addUnitsUtils(formData);
    }
  };
  return (
    <Box
      component="form"
      onSubmit={onSubmitHandler}
      sx={{ display: "grid", gap: "1rem" }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="unitName"
        label="Unit Name"
        name="unitName"
        autoComplete="email"
        autoFocus
      />

      <TextField
        id="outlined-number"
        label="Floor Number"
        name="unitFloor"
        type="number"
        InputProps={{ inputProps: { min: 0, max: 50 } }}
        InputLabelProps={{
          shrink: true
        }}
      />
      <Select id="unitStatus" name="unitStatus" value="VACANT">
        <MenuItem value={"OCCUPIED"}>Occupied</MenuItem>
        <MenuItem value={"VACANT"}>Vacant</MenuItem>
        <MenuItem value={"BOOKED"}>Booked</MenuItem>
      </Select>

      <Button type="submit" variant="contained">
        Add Unit
      </Button>
    </Box>
  );
};

export default AddUnitForm;
