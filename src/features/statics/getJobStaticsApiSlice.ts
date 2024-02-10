import { apiSlice } from "../../app/api/apiSlice";

interface jobStatics {
	all: number,
	active: number,
	expired: number
}
export const getJobStaticsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getJobStatics: builder.query<jobStatics, void>({
			query: () => "/job/statics",
			providesTags: ["CompanyJobs"],
		}),
	}),
});

export const { useGetJobStaticsQuery } = getJobStaticsApiSlice;
