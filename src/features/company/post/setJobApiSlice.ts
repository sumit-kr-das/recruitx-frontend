import { apiSlice } from "../../../app/api/apiSlice";

export const setJobApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (credentials) => ({
        url: "/job/add",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { usePostJobMutation } = setJobApiSlice;
