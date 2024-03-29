import { enableMocking } from "@app/msw/enable-mocking.ts"
import App from "./app/App.tsx"
import "./app/index.scss"
import { createRoot } from "react-dom/client"

enableMocking().then(() => {
  const root = createRoot(document.getElementById("root")!)
  root.render(<App />)
})
