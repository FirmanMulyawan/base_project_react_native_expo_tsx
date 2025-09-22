import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../slices/postSlices";

export const store = configureStore({
  reducer: {
    products: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
