import React from "react"
import App from "./app/App.tsx"
import "./app/index.scss"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
root.render(<App />)
