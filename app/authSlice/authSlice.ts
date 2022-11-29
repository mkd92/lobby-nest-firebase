import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "../store";

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = { ...user };
    },
    logout: state => {
      state.user = null;
    }
  }
});

export const { addUser, logout } = authSlice.actions;
export const selectUser = (state: RootState) => state.persisted.user;
export const authReducer = authSlice.reducer;
