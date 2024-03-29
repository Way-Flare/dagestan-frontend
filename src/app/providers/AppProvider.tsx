import { store } from "@app/store"
import { Fallback } from "@shared/ui"
import { Suspense } from "react"
import { Provider } from "react-redux"
import { Outlet } from "react-router-dom"

export const AppProvider = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<Fallback />}>
        <Outlet />
      </Suspense>
    </Provider>
  )
}
