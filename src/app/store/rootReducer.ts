import { routeApi } from "@entities/map/api/get-route"
import { combineReducers } from "@reduxjs/toolkit"
import { apiSlice } from "@shared/api/defaultApi"

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  [routeApi.reducerPath]: routeApi.reducer,
})
