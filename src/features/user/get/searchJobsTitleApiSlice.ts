import { apiSlice } from "../../../app/api/apiSlice";

export const searchJobsTitleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchJobsTitle: builder.query({
      query: ({ title }) => `/job/search/title?search=${title}`,
      //   providesTags: ["User"],
    }),
  }),
});

export const { useLazySearchJobsTitleQuery } = searchJobsTitleApiSlice;
