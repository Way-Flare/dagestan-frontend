import { IMarkers } from "@shared/interface/IMarkers"
import { apiSlice } from "@shared/api/defaultApi"
import { rtk_tags } from "@shared/api/tags"

export const mapMarkersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMarkers: builder.query<IMarkers[], void>({
      query: () => "/v1/places/all?format=json",
      providesTags: [rtk_tags.PLACES_TAG],
    }),
    getMarker: builder.query<IMarkers, { placeId: number }>({
      query: ({ placeId }) => {
        return {
          url: "/place",
          params: { placeId },
        }
      },
      providesTags: [rtk_tags.PLACE_TAG],
    }),
    createMarker: builder.mutation<{}, { marker: IMarkers }>({
      query: ({ marker }) => ({
        url: `/place`,
        method: "POST",
        body: { marker },
      }),
      invalidatesTags: [rtk_tags.PLACES_TAG],
    }),
    updateMarker: builder.mutation<{}, { marker: IMarkers }>({
      query: ({ marker }) => ({
        url: `/place/${marker.id}`,
        method: "PATCH",
        body: { marker },
      }),
      invalidatesTags: [rtk_tags.PLACES_TAG],
    }),
    deleteMarker: builder.mutation<{}, { markerId: number }>({
      query: ({ markerId }) => ({
        url: `/place/${markerId}`,
        method: "DELETE",
      }),
      invalidatesTags: [rtk_tags.PLACES_TAG],
    }),
  }),
})

export const {
  useCreateMarkerMutation,
  useGetMarkersQuery,
  useGetMarkerQuery,
  useDeleteMarkerMutation,
  useUpdateMarkerMutation,
} = mapMarkersApi
