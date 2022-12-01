import { Button } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { updateSelectedUnit } from "../../app/unitSlice/unitSlice";
import { UnitType } from "../../app/unitSlice/unitSlice";
interface UnitInputType {
  unit: UnitType;
}
const Unit = ({ unit }: UnitInputType) => {
  const dispatch = useAppDispatch();
  const onUnitSelected = () => {
    dispatch(updateSelectedUnit(unit.unitId));
  };
  return (
    <Button
      variant="outlined"
      sx={{ height: "100%", width: "100%", borderRadius: "1rem" }}
      onClick={onUnitSelected}
    >
      {unit.unitName}
    </Button>
  );
};

export default Unit;
