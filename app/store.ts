/// <reference types="redux-persist" />
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./authSlice/authSlice";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    persisted: persistedReducer
    // auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
