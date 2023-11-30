import { apiSlice } from "../../../app/api/apiSlice";

export const viewAllCompanyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    viewAllCompany: builder.query({
      query: ({ approve }) => `/admin/company/view?approve=${approve}`,
      providesTags: ["ApproveCompany"],
    }),
  }),
});

export const { useViewAllCompanyQuery } = viewAllCompanyApiSlice;
