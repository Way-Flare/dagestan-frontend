import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"

export const routeApi = createApi({
  reducerPath: "routeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mapbox.com/directions/v5",
  }),
  endpoints: (builder) => ({
    getDirections: builder.query({
      query: ({ start, end }) => {
        const params = {
          accessToken: import.meta.env.VITE_MAP_PUBLIC_TOKEN,
          geometries: "geojson",
          waypoints: `${start[0]},${start[1]};${end[0]},${end[1]}`,
        }

        return `mapbox/driving/${params.waypoints}?geometries=${params.geometries}&access_token=${params.accessToken}`
      },
    }),
  }),
})

export const { useGetDirectionsQuery } = routeApi
