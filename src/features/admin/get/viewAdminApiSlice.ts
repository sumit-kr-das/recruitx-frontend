import { apiSlice } from "../../../app/api/apiSlice";

export const viewAdminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    viewAdmin: builder.query({
      query: () => "/admin/view",
      providesTags: ["Admin"],
    }),
  }),
});

export const { useViewAdminQuery } = viewAdminApiSlice;
