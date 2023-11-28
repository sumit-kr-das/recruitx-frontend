import { apiSlice } from "../../../app/api/apiSlice";

export const setCompanyProfileDetailsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    setCompanyProfile: builder.mutation({
      query: (credentials) => ({
        url: "/company/profile/add",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["CompanyProfileDetails"],
    }),
  }),
});

export const { useSetCompanyProfileMutation } =
  setCompanyProfileDetailsApiSlice;
