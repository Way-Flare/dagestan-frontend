import { combineReducers } from "@reduxjs/toolkit"
import { apiSlice } from "src/shared/api/defaultApi"
import { routeApi } from "src/modules/Map/api/getRoute"

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [routeApi.reducerPath]: routeApi.reducer,
})
