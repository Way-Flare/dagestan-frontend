import { placeHandlers } from "@entities/map/api/__mocks__/placeHandlers"
import { routeHandlers } from "@entities/map/api/__mocks__/routeHandlers"
import { http, HttpResponse } from "msw"

export const handlers = [
  http.get("/auth", () => {
    // Note that you DON'T have to stringify the JSON!
    return HttpResponse.json({
      user: {
        id: "abc-123",
        name: "John Maverick",
      },
    })
  }),
  ...placeHandlers,
  ...routeHandlers,
]
