import { http, HttpResponse } from "msw"
import { __serverDatabase } from "@shared/lib/server"

export const placeHandlers = [
  http.get("/places", () => {
    const places = __serverDatabase.place.getAll()

    return HttpResponse.json(places)
  }),
  http.get("/place", (req) => {
    const paramsString = req.request.url.split("?")[1]
    const searchParams = new URLSearchParams(paramsString)
    const placeId = Number(searchParams.get("placeId"))
    const places = __serverDatabase.place.findFirst({
      where: {
        id: {
          equals: placeId,
        },
      },
    })

    return HttpResponse.json(places)
  }),
  http.post("/place", async (req) => {
    const body = await req.request.json()
    // @ts-ignore
    const newPlace = __serverDatabase.place.create(body?.marker)

    return HttpResponse.json(newPlace)
  }),
  http.patch("/place/:placeId", async (req) => {
    const body = await req.request.json()
    const newPlace = __serverDatabase.place.update({
      where: {
        id: { equals: Number(req.params.placeId) },
      },
      // @ts-ignore
      data: body?.marker,
    })

    return HttpResponse.json(newPlace)
  }),
  http.delete("/place/:placeId", (req) => {
    const deletePlace = __serverDatabase.place.delete({
      where: {
        id: { equals: Number(req.params.placeId) },
      },
    })

    return HttpResponse.json(deletePlace)
  }),
]
