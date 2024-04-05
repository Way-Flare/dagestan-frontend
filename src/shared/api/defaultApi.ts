import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { rtk_tags } from "./tags"

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: Object.values(rtk_tags),
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_HOST }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
  }),
})

export const { useGetPostsQuery } = apiSlice
