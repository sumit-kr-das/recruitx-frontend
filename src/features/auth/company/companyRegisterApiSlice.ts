import { apiSlice } from "../../../app/api/apiSlice";

export const companyRegisterApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    cRegister: builder.mutation({
      query: (credentials) => ({
        url: "/company/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Company", "CompanyProfileDetails", "CompanyJobs"],
    }),
  }),
});

export const { useCRegisterMutation } = companyRegisterApiSlice;
