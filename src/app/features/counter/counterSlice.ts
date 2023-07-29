import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";
import { AppThunk } from "../../store";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed"
}

const INIT_STATE: CounterState = {
  value: 10,
  status: "idle"
}

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
  const response = await fetchCount(amount);
  // get intellisense here
  return response.data;
})

export const incrementIfOdd = (amount: number): AppThunk => (dispatch, getState) => {
  const currVal = getState().value;
  if (currVal % 2 === 1) {
    dispatch(incrementByAmount(amount))
  }
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
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, state => {
      state.status = 'loading'
    }).addCase(incrementAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value += action.payload
    }).addCase(incrementAsync.rejected, (state) => {
      state.status = 'failed'
    })
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer;