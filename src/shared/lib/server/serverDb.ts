import { factory, manyOf, primaryKey } from "@mswjs/data"

/**
 * Its database, which using only in @mswjs "server" handlers
 * This handlers run in the browser (client side) and emulate
 * work with real API and database
 */
export const db = factory({
  place: {
    id: primaryKey(Number),
    name: String,
    short_description: String,
    description: String,
    latitude: Number,
    longitude: Number,
    images: manyOf("image"),
    rating: Number,
    work_time: String,
    feedback_count: Number,
    //@ts-ignore
    tags: [""],
  },
  tag: {
    id: primaryKey(Number),
    name: String,
  },
  image: {
    id: primaryKey(Number),
    name: String,
    file: String,
  },
  route: {
    id: primaryKey(Number),
    title: String,
    images: manyOf("image"),
    short_description: String,
    distance: Number,
    travel_time: String,
    feedback_count: Number,
    rating: Number,
  },
})
