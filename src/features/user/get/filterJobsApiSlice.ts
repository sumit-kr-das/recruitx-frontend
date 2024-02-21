import { apiSlice } from "../../../app/api/apiSlice";

export const filterJobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    withFilterJobs: builder.query({
      query: ({ title, value, workplaceType, jobType, salary, exp }) =>
        `/job/search?search=${title}&location=${value}&jobTypes=${jobType}&workplaceType=${workplaceType}&minSalary=${salary}&minExprience=${exp}`,
      //   providesTags: ["User"],
    }),
  }),
});

export const { useLazyWithFilterJobsQuery } = filterJobsApiSlice;
