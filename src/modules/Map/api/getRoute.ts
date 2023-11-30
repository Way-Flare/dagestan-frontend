import { createApi } from "@reduxjs/toolkit/dist/query/react"
import { fetchBaseQuery } from "@reduxjs/toolkit/query"

export const routeApi = () =>
  createApi({
    reducerPath: "routeApi",
    baseQuery: fetchBaseQuery({
      baseUrl: `https://api.mapbox.com/directions/v5/mapbox/driving/42.983437,47.505629;42.983571,42.983571?geometries=geojson&access_token=${
        import.meta.env.VITE_MAP_PUBLIC_TOKEN
      }`,
    }),
    endpoints: (builder) => ({
      getRoute: builder.query({
        query: () => "/",
      }),
    }),
  })

export const { useGetRouteQuery } = routeApi
