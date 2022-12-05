import { createSlice } from "@reduxjs/toolkit";
import { FieldValue, QueryDocumentSnapshot } from "firebase/firestore";
import { RootState } from "../store";
interface UnitState {
  units: QueryDocumentSnapshot[] | [];
  selectedUnitId: string | null;
}
export interface UnitType {
  uid: string;
  propId: string;
  unitName: string;
  unitFloor: number;
  unitStatus: "VACANT" | "BOOKED" | "OCCUPIED";
  timeStamp?: FieldValue;
  unitId?: string;
}
const initialState: UnitState = {
  units: [],
  selectedUnitId: null
};
export const unitSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    updateUnits: (state, { payload }) => {
      state.units = payload;
    },
    updateSelectedUnit: (state, { payload }) => {
      state.selectedUnitId = payload;
    }
  }
});

export const { updateUnits, updateSelectedUnit } = unitSlice.actions;
export const unitsReducer = unitSlice.reducer;
export const selectUnits = (state: RootState) => state.units.units;
export const selectSelectedUnitId = (state: RootState) =>
  state.units.selectedUnitId;
