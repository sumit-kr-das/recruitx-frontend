import { apiSlice } from "../../../app/api/apiSlice";

export const viewAppliedJobsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        viewAppliedJobs: builder.query({
            query: () => `user/applied/jobs/view`,
            providesTags: ["User"],
        }),
    }),
});

export const { useViewAppliedJobsQuery } = viewAppliedJobsApiSlice;
