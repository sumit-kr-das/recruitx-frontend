import { apiSlice } from "../../../app/api/apiSlice";

interface CompanyProfile {
  logo: string,
  description: string,
  teamSize: number,
  type: string,
  tags: string[],
  founded: string,
}

export const viewCompanyProfileDetailsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    viewCompanyProfile: builder.query<CompanyProfile, void>({
      query: () => "/company/profile/view",
      providesTags: ["CompanyProfileDetails"],
    }),
  }),
});

export const { useViewCompanyProfileQuery } = viewCompanyProfileDetailsApiSlice;
