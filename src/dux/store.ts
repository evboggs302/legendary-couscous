import { configureStore } from "@reduxjs/toolkit";
import insightsReducer, { initialState as iState } from "./insightsSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const initState = {
  insights: iState,
};

const store = configureStore({
  reducer: {
    insights: insightsReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
