import { apiSlice } from "../../../app/api/apiSlice";

export const getSearchDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchData: builder.mutation({
      query: (credentials) => ({
        url: "/job/search",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useSearchDataMutation } = getSearchDataApiSlice;

