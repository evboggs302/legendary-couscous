import { createSlice } from "@reduxjs/toolkit";

type InsightState = {
  open: boolean;
};

export const initialState: InsightState = {
  open: false,
};

const insightsSlice = createSlice({
  name: "insights",
  initialState,
  reducers: {
    toggleInsights: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleInsights } = insightsSlice.actions;
export default insightsSlice.reducer;
