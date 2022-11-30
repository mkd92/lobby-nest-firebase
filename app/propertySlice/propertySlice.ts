import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface PropertyState {
  propName: string;
  propAddress_1: string;
  propAddress_2: string;
  propCity: string;
  propState: string;
  propPin: string;
}
type InitialStateType = {
  properties: PropertyState[];
  // TODO: this should be an object with id key
};
const initialState: InitialStateType = {
  properties: []
};
export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    updateProperties: (state, { payload }) => {
      state.properties = [...payload];
    },
    addProperty: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
    }
  }
});

export const { updateProperties, addProperty } = propertiesSlice.actions;
export const selectProperties = (state: RootState) =>
  state.properties.properties;
export const propertiesReducer = propertiesSlice.reducer;
