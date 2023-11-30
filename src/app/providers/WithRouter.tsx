import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "src/app/store/store"
import { Fallback } from "src/shared/ui/Fallback"

export const WithRouter = (component: () => React.ReactNode) => () => (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>{component()}</Suspense>
    </BrowserRouter>
  </Provider>
)
