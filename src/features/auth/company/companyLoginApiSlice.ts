import { apiSlice } from "../../../app/api/apiSlice";

export const companyLoginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    cLogin: builder.mutation({
      query: (credentials) => ({
        url: "/company/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Company", "CompanyProfileDetails", "CompanyJobs", "JobChart", "CompanyStats"],
    }),
  }),
});

export const { useCLoginMutation } = companyLoginApiSlice;
