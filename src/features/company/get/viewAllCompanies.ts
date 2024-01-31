import { TCompany } from "../../../@types/TCompany";
import { apiSlice } from "../../../app/api/apiSlice";

export const viewAllCompaniesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    viewAllCompanies: builder.query<TCompany[], { limit: number }>({
      query: ({ limit }) => `/company/views?limit=${limit}`,
      providesTags: ["Company"],
    }),
  }),
});

export const { useViewAllCompaniesQuery } = viewAllCompaniesApiSlice;
