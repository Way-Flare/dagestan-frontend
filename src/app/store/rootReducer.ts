import { combineReducer } from "@reduxjs/toolkit"
import { apiSlice } from "src/shared/api/defaultApi"

export const rootReducer = combineReducer({
  [apiSlice.reducerPath]: apiSlice.reducer,
})
