import { apiSlice } from "../../../app/api/apiSlice";
import { TAppliedJobDetail } from "../../../@types/publicTypes/TAppliedJobDetail";

export const viewAppliedJobsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        viewAppliedJobs: builder.query<TAppliedJobDetail[], void>({
            query: () => `user/applied/jobs/view`,
            providesTags: ["User", "Apply"],
        }),
    }),
});

export const { useViewAppliedJobsQuery } = viewAppliedJobsApiSlice;
