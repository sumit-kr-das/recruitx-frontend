import { apiSlice } from "../../../app/api/apiSlice";

export const updateApproveCompanyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    approveCompany: builder.mutation({
      query: (credentials) => ({
        url: "/company/edit",
        method: "PUT",
        body: { ...credentials },
      }),
      invalidatesTags: ["ApproveCompany", "Company"],
    }),
  }),
});

export const { useApproveCompanyMutation } = updateApproveCompanyApiSlice;
