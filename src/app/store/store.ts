import { configureStore, combineReducer } from "@reduxjs/toolkit"
import { apiSlice } from "../../shared/api/defaultApi"

const rootReducer = combineReducer({
  [apiSlice.reducerPath]: apiSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
