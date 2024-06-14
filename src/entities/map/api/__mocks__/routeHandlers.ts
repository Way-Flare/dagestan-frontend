import { http, HttpResponse } from "msw"
import { __serverDatabase } from "@shared/lib/server"

export const routeHandlers = [
  http.get("/v1/routes/all", () => {
    const routes = __serverDatabase.route.getAll()

    return HttpResponse.json(routes)
  }),
  http.get("/v1/routes/:routeId", (req) => {
    const routeId = Number(req.params.routeId)
    const routes = __serverDatabase.route.findFirst({
      where: {
        id: {
          equals: routeId,
        },
      },
    })

    return HttpResponse.json(routes)
  }),
]
