import { Button } from "@mui/material";
import { QueryDocumentSnapshot } from "firebase/firestore";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { updateSelectedUnit } from "../../app/unitSlice/unitSlice";
import { UnitType } from "../../app/unitSlice/unitSlice";
interface UnitInputType {
  unit: UnitType;
}
const Unit = ({ unit }: { unit: QueryDocumentSnapshot }) => {
  const dispatch = useAppDispatch();
  const onUnitSelected = () => {
    dispatch(updateSelectedUnit(unit.id));
  };
  return (
    <Button
      variant="outlined"
      sx={{ height: "100%", width: "100%", borderRadius: "1rem" }}
      onClick={onUnitSelected}
    >
      {unit.data().unitName}
    </Button>
  );
};

export default Unit;
