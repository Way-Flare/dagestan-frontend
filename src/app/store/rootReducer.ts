import { combineReducers } from "@reduxjs/toolkit"
import { apiSlice } from "src/shared/api/defaultApi"

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
})
