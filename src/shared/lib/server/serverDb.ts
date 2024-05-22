import { factory, primaryKey } from "@mswjs/data"

/**
 * Its database, which using only in @mswjs "server" handlers
 * This handlers run in the browser (client side) and emulate
 * work with real API and database
 */
export const db = factory({
  place: {
    id: primaryKey(Number),
    typeId: Number,
    name: String,
    description: String,
    latitude: Number,
    longitude: Number,
  },
})
