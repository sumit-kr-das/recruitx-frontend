import { TJobs } from "../../../@types/publicTypes/TJobs";
import { apiSlice } from "../../../app/api/apiSlice";

export const getAllJobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query<TJobs[], { limit: number }>({
      query: ({ limit }) => `/job/view/feed?limit=${limit}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetAllJobsQuery } = getAllJobsApiSlice;
