import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface PropertyState {
  propId: string;
  propName: string;
  propAddress_1: string;
  propAddress_2: string;
  propCity: string;
  propState: string;
  propPin: string;
}
type InitialStateType = {
  properties: PropertyState[];
  selectedPropId: null;
  // TODO: this should be an object with id key
};
const initialState: InitialStateType = {
  properties: [],
  selectedPropId: null
};
export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    updateProperties: (state, { payload }) => {
      state.properties = [...payload];
    },
    focusProperty: (state, action: PayloadAction<any>) => {
      state.selectedPropId = action.payload;
    }
  }
});

export const { updateProperties, focusProperty } = propertiesSlice.actions;
export const selectProperties = (state: RootState) =>
  state.properties.properties;
export const selectSelectedPropId = (state: RootState) =>
  state.properties.selectedPropId;
export const propertiesReducer = propertiesSlice.reducer;
