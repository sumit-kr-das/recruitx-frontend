import { apiSlice } from "../../../app/api/apiSlice";

interface Admin {
  _id: string,
  email: string,
  name: string,
  role: string,
  createdAt: string,
  updatedAt: string
}

export const viewAdminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    viewAdmin: builder.query<Admin, void>({
      query: () => "/admin/view",
      providesTags: ["Admin"],
    }),
  }),
});

export const { useViewAdminQuery } = viewAdminApiSlice;
