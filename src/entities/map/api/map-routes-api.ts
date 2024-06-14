import { IRoutes } from "@shared/interface/IMarkers"
import { apiSlice } from "@shared/api/defaultApi"
import { rtk_tags } from "@shared/api/tags"

export const mapRoutesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRoutes: builder.query<IRoutes[], void>({
      query: () => "/v1/routes/all?format=json",
      providesTags: [rtk_tags.ROUTES_TAG],
    }),
    getRoute: builder.query<IRoutes, { routeId: number }>({
      query: ({ routeId }) => {
        return {
          url: `/v1/routes/${routeId}?format=json`,
        }
      },
      providesTags: [rtk_tags.ROUTE_TAG],
    }),
  }),
})

export const { useGetRoutesQuery, useGetRouteQuery } = mapRoutesApi
