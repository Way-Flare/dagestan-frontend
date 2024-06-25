import { createBrowserRouter } from "react-router-dom"
import { AppProvider } from "./AppProvider"
import { paths } from "./path"
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage"

export const router = createBrowserRouter([
  {
    element: <AppProvider />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: paths.MAIN,
        lazy: async () => {
          const MainPage = await import("@pages/MainPage/MainPage")
          return { Component: MainPage.default }
        },
      },
      {
        path: paths.REGISTRATION_PAGE,
        lazy: async () => {
          const RegistrationPage = await import(
            "@pages/RegistrationPage/RegistrationPage"
          )
          return { Component: RegistrationPage.default }
        },
      },
      {
        path: paths.AUTHORIZATION_PAGE,
        lazy: async () => {
          const LoginPage = await import("@pages/LoginPage/LoginPage")
          return { Component: LoginPage.default }
        },
      },
      {
        path: paths.ROUTES_PAGE,
        lazy: async () => {
          const RoutesPage = await import("@pages/RoutesPage/RoutesPage")
          return { Component: RoutesPage.default }
        },
      },
      {
        path: paths.PLACE_PAGE,
        lazy: async () => {
          const PlacePage = await import("@pages/PlacePage/PlacePage")
          return { Component: PlacePage.default }
        },
      },
    ],
  },
])
