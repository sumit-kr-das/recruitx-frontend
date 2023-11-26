import { apiSlice } from "../../app/api/apiSlice";

export const getJobStaticsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getJobStatics: builder.query({
			query: () => "/job/statics",
			providesTags: ["CompanyJobs"],
		}),
	}),
});

export const { useGetJobStaticsQuery } = getJobStaticsApiSlice;
