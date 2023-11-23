import { apiSlice } from "../../app/api/apiSlice";

export const viewJobsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		viewJobs: builder.query({
			query: () => "/job/view",
		}),
	}),
});

export const { useViewJobsQuery } = viewJobsApiSlice;
