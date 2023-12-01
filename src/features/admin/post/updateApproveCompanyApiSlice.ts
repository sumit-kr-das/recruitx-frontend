import { apiSlice } from "../../../app/api/apiSlice";

export const updateApproveCompanyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    approveCompany: builder.mutation({
      query: (credentials) => ({
        url: "/company/edit",
        method: "PUT",
        body: { ...credentials },
      }),
      invalidatesTags: ["ApproveCompany"],
    }),
  }),
});

export const { useApproveCompanyMutation } = updateApproveCompanyApiSlice;
