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
const initialState: PropertyState = {
  propName: "",
  propAddress_1: "",
  propAddress_2: "",
  propCity: "",
  propState: "",
  propPin: ""
};
export const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    updateProperties: state => {
      state = state;
    },
    addProperty: (state, action: PayloadAction<any>) => {
      console.log(action.payload);
    }
  }
});

export const { updateProperties, addProperty } = propertiesSlice.actions;
export const selectProperties = (state: RootState) => state.properties;
export const propertiesReducer = propertiesSlice.reducer;
