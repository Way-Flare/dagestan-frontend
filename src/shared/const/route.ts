import { paths } from "src/shared/const/path"
import { lazy } from "react"

export const route = [
  {
    path: paths.MAIN,
    Element: lazy(() => import("src/pages/MainPage/MainPage")),
  },
  {
    path: paths.REGISTRATION_PAGE,
    Element: lazy(() => import("src/pages/RegistrationPage/RegistrationPage")),
  },
  {
    path: paths.AUTHORIZATION_PAGE,
    Element: lazy(
      () => import("src/pages/AuthorizationPage/AuthorizationPage"),
    ),
  },
]
