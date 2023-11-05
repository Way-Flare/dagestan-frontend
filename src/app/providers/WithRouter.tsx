import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"

export const WithRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback={"Loading..."}>{component()}</Suspense>
  </BrowserRouter>
)
