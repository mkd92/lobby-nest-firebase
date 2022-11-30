import { createSlice } from "@reduxjs/toolkit";
import { FieldValue } from "firebase/firestore";
import { RootState } from "../store";

export interface TransactionType {
  uid: string;
  propId: string;
  unitId: string;
  transactionId?: string;
  timeStamp?: FieldValue;
  createdAt: string;
  dueDate: string;
  amountDue: number;
  amountPaid: number;
}
export interface TransactionsStateType {
  transactions: TransactionType[] | [];
}

const initialState: TransactionsStateType = {
  transactions: []
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {}
});

export const {} = transactionSlice.actions;
export const transactionReducer = transactionSlice.reducer;
export const selectTransactions = (state: RootState) =>
  state.transactions.transactions;
