import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./rootReducer"
import { apiSlice } from "@shared/api/defaultApi"
import { routeApi } from "@entities/map/api/get-route"

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      apiSlice.middleware,
      routeApi.middleware,
    )
  },
})
