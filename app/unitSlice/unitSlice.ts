import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  units: []
};
export const unitSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    updateUnits: () => {}
  }
});

export const { updateUnits } = unitSlice.actions;
export const selectUnits = (state: RootState) => state.units.units;
export const unitsReducer = unitSlice.reducer;
