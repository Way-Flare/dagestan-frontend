import { Route, Routes } from "react-router-dom"
import { route } from "src/shared/const/route"

export const Routing = () => {
  return (
    <Routes>
      {route.map(({ Element, path }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  )
}
