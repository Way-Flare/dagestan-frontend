import placesMock from "./__mocks__/markersMock.json"
import { db } from "./serverDb"

export function startDatabaseMigration() {
  const places = db.place.getAll()

  // Data already exists by persist(db)
  if (places.length > 0) {
    return
  }

  placesMock.forEach((row) => db.place.create(row))
}
