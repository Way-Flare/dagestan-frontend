import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "src/shared/api/defaultApi"
import { rootReducer } from "src/app/store/rootReducer"

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
