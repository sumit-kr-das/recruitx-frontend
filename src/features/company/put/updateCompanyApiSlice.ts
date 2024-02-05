import { apiSlice } from "../../../app/api/apiSlice";

export const updateCompanyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateCompany: builder.mutation({
      query: (id) => ({
        url: `admin/company/approve/${id}`,
        method: "PUT",
        // body: { ...credentials },
      }),
      invalidatesTags: ["Company"],
    }),
  }),
});

export const { useUpdateCompanyMutation } = updateCompanyApiSlice;
