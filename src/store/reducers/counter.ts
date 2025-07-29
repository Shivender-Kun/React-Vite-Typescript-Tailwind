import { createSlice } from "@reduxjs/toolkit";

interface Counter {
  count: number;
}

const initialState: Counter = {
  count: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count++;
    },
  },
});

export const { increaseCount } = slice.actions;

export default slice.reducer;
