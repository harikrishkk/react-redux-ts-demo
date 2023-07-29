import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const INIT_STATE: CounterState = {
  value: 10
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: INIT_STATE,
  reducers: {
    increment: (state) => {
      // we get intelliscence here
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer;