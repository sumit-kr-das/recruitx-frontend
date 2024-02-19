import { apiSlice } from "../../../app/api/apiSlice";

export const filterJobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    filterJobs: builder.query({
      query: ({ value, workplaceType, jobType, salary, exp }) =>
        `/job/search?location=${value}&jobTypes=${jobType}&workplaceType=${workplaceType}&minSalary=${salary}&minExprience=${exp}`,
      //   providesTags: ["User"],
    }),
  }),
});

export const { useFilterJobsQuery } = filterJobsApiSlice;
