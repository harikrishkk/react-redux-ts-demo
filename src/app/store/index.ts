import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import { pokemonApi } from "../services/pokemon";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

// name of the new type -> AppThunk<ReturnType = void>. Generics allow us to parameterize types
// Hover on ThunkAction above to find out the params 
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>