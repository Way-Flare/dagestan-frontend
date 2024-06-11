import { http, HttpResponse } from "msw"
import { __serverDatabase } from "@shared/lib/server"

export const placeHandlers = [
  http.get("/v1/places/all", () => {
    const places = __serverDatabase.place.getAll()

    return HttpResponse.json(places)
  }),
  http.get("/v1/places/:placeId", (req) => {
    const placeId = Number(req.params.placeId)
    const places = __serverDatabase.place.findFirst({
      where: {
        id: {
          equals: placeId,
        },
      },
    })

    return HttpResponse.json(places)
  }),
  http.post("/places", async (req) => {
    const body = await req.request.json()
    // @ts-ignore
    const newPlace = __serverDatabase.place.create(body?.marker)

    return HttpResponse.json(newPlace)
  }),
  http.patch("/places/:placeId", async (req) => {
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
  http.delete("/places/:placeId", (req) => {
    const deletePlace = __serverDatabase.place.delete({
      where: {
        id: { equals: Number(req.params.placeId) },
      },
    })

    return HttpResponse.json(deletePlace)
  }),
]
