import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import beneReducer from "./slices/beneficiarySlice";

const reducer = combineReducers({
  bene: beneReducer,
  // here we will be adding reducers
});
const store = configureStore({
  reducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
