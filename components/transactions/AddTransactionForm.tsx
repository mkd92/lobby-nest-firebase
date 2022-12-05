import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  focusProperty,
  selectProperties,
  selectSelectedPropId
} from "../../app/propertySlice/propertySlice";
import {
  selectSelectedUnitId,
  selectUnits,
  updateSelectedUnit
} from "../../app/unitSlice/unitSlice";

const AddTransactionForm = () => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2014-08-18"));
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  const selectedProperty = useAppSelector(selectSelectedPropId);
  const selectedUnit = useAppSelector(selectSelectedUnitId);

  const properties = useAppSelector(selectProperties);
  const units = useAppSelector(selectUnits);

  const dispatch = useAppDispatch();

  const onChangeProp = (e: SelectChangeEvent) => {
    const value = (e.target as any).value;
    dispatch(focusProperty(value));
  };
  const onChangeUnit = (e: SelectChangeEvent) => {
    const value = (e.target as any).value;
    dispatch(updateSelectedUnit(value));
  };

  return (
    <Box
      sx={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "1fr 1fr",
        marginTop: "2rem"
      }}
    >
      <Box sx={{ gridColumnStart: 1, gridColumnEnd: 3 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Transaction Date"
            inputFormat="DD/MM/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={params => <TextField {...params} fullWidth />}
          />
        </LocalizationProvider>
      </Box>
      <FormControl sx={{}}>
        <InputLabel>Select Property</InputLabel>
        <Select
          id="propId"
          name="propId"
          disabled={selectedProperty ? false : true}
          value={selectedProperty ? selectedProperty : undefined}
          onChange={onChangeProp}
          label="Select Property"
        >
          {properties.map(property =>
            <MenuItem value={property.id} key={property.id}>
              {property.data().propName}
            </MenuItem>
          )}
          <MenuItem value="select">Select Property</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Select Unit</InputLabel>
        <Select
          disabled={selectedUnit ? false : true}
          id="propId"
          name="propId"
          value={selectedUnit ? selectedUnit : undefined}
          onChange={onChangeUnit}
          label="Select Unit"
        >
          {units.length > 0
            ? units.map(unit =>
                <MenuItem value={unit.id} key={unit.id}>
                  {unit.data().unitName}
                </MenuItem>
              )
            : <MenuItem>Add Units to Property</MenuItem>}
        </Select>
      </FormControl>
    </Box>
  );
};

export default AddTransactionForm;
