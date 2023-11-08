import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "src/app/store/store"

export const WithRouter = (component: () => React.ReactNode) => () => (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={"Loading..."}>{component()}</Suspense>
    </BrowserRouter>
  </Provider>
)
