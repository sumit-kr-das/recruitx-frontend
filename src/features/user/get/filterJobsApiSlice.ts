import { apiSlice } from "../../../app/api/apiSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const filterJobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    filterJobs: builder.query({
      query: ({ value, workplaceType, jobType, salary, exp }) =>
        `/job/search?location=${value}&jobTypes=${jobType}&workplaceType=${workplaceType}&minSalary=${salary}&minExprience=${exp}`,
      //   providesTags: ["User"],
    }),
  }),
});

export const { useLazyFilterJobsQuery } = filterJobsApiSlice;
