import React, { useState } from "react";
import { Grid, Modal, Typography, Box } from "@mui/material";
import AddUnitButton from "./AddUnitButton";
import AddUnitForm from "./AddUnitForm";
import { useFetchUnits } from "../../utils/units/useFetchUnits";
import { useAppSelector } from "../../app/hooks";
import { selectSelectedPropId } from "../../app/propertySlice/propertySlice";
import Unit from "./Unit";
import { selectUnits, UnitType } from "../../app/unitSlice/unitSlice";

const Units = () => {
  const [open, setOpen] = useState(false);
  const selectedPropId = useAppSelector(selectSelectedPropId);
  useFetchUnits();
  const units = useAppSelector(selectUnits);

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
    <div>
      <Modal open={open} onClose={closeModelHandler}>
        <Box sx={modalBoxStyle}>
          <Typography>Modal</Typography>
          <AddUnitForm closeModel={closeModelHandler} />
        </Box>
      </Modal>
      {selectedPropId
        ? <Grid
            container
            sx={{
              padding: "1rem",
              gap: "1rem"
            }}
          >
            <Grid
              item
              xs={2}
              sx={{
                height: "10rem"
              }}
            >
              <AddUnitButton openModel={openModelHandler} />
            </Grid>
            {units.map((unit: UnitType) =>
              <Grid
                item
                key={unit.unitId}
                xs={2}
                sx={{
                  height: "10rem"
                }}
              >
                <Unit unit={unit} />
              </Grid>
            )}
          </Grid>
        : <Grid>
            <Typography>Select a Propperty</Typography>
          </Grid>}
    </div>
  );
};

export default Units;
