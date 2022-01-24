import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../slices/movies.slice";

import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    movieReducer: moviesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export default store;
