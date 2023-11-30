import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "src/shared/api/defaultApi"
import { rootReducer } from "src/app/store/rootReducer"
import { routeApi } from "src/modules/Map/api/getRoute"

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      apiSlice.middleware,
      routeApi.middleware,
    )
  },
})
