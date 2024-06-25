import placesMock from "./__mocks__/markersMock.json"
import routesMock from "./__mocks__/routesMock.json"

import { db } from "./serverDb"

export function startDatabaseMigration() {
  const places = db.place.getAll()
  const routes = db.route.getAll()

  // Data already exists by persist(db)
  if (places.length > 0) {
    return
  }

  if (routes.length > 0) {
    return
  }

  const images = [
    // db.image.create({
    //   id: 1,
    //   name: "first",
    //   file: "http://backend/1.jpg",
    // }),
    // db.image.create({
    //   id: 2,
    //   name: "second",
    //   file: "http://backend/2.jpg",
    // }),
  ]

  placesMock.forEach((row) => db.place.create({ ...row, images }))
  routesMock.forEach((row) => db.route.create({ ...row, images }))
}
