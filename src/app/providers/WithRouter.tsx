import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { Fallback } from "@shared/ui"
import { store } from "@app/store"

export const WithRouter = (component: () => React.ReactNode) => () => (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>{component()}</Suspense>
    </BrowserRouter>
  </Provider>
)
