import { createSlice } from "@reduxjs/toolkit";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { Interface } from "readline";
import { propertiesSlice } from "../propertySlice/propertySlice";
import { RootState } from "../store";

interface InitialStateType {
  tenants: QueryDocumentSnapshot[];
  selectedTenantId: null | string;
}
const initialState: InitialStateType = {
  tenants: [],
  selectedTenantId: null
};
const tenantSlice = createSlice({
  name: "tenants",
  initialState,
  reducers: {
    updateTenants: (state, actions) => {},
    updateSelectedTenant: (state, actions) => {}
  }
});

export const tenantReducers = tenantSlice.reducer;
export const selectTenants = (state: RootState) => state.tenants.tenants;
export const selectSelectedTenant = (state: RootState) =>
  state.tenants.selectedTenantId;
export const { updateTenants, updateSelectedTenant } = tenantSlice.actions;
