import { apiSlice } from "../../../app/api/apiSlice";

export const adminLoginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    aLogin: builder.mutation({
      query: (credentials) => ({
        url: "/admin/login",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const { useALoginMutation } = adminLoginApiSlice;
