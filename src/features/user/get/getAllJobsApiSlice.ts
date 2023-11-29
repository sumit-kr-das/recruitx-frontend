import { apiSlice } from "../../../app/api/apiSlice";

export const getAllJobsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllJobs: builder.query({
            query: ({ limit }) => `/job/view/feed?limit=${limit}`,
            providesTags: ["User"],
        }),
    }),
});

export const { useGetAllJobsQuery } = getAllJobsApiSlice;
