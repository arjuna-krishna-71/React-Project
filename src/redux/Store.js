import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice/LoginSlice";

export const loginStore = configureStore({
  reducer: {
    login: loginReducer,
  },
});
