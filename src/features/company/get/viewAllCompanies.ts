import { TCompany } from "../../../@types/TCompany";
import { apiSlice } from "../../../app/api/apiSlice";

export const viewAllCompaniesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    viewAllCompanies: builder.query<TCompany[], void>({
      query: () => "/company/views",
      providesTags: ["Company"],
    }),
  }),
});

export const { useViewAllCompaniesQuery } = viewAllCompaniesApiSlice;
