import { apiSlice } from "src/shared/api/defaultApi"

export const mapMarkersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMarkers: builder.query({
      query: () => "/",
    }),
  }),
})

export const { useGetMarkersQuery } = mapMarkersApi
