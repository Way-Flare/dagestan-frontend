import { route } from "@shared/const/route"
import { Route, Routes } from "react-router-dom"

export const Routing = () => {
  return (
    <Routes>
      {route.map(({ Element, path }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  )
}
