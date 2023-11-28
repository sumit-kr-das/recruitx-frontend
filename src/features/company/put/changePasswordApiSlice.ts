import { apiSlice } from "../../../app/api/apiSlice";

export const changePasswordApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    changePass: builder.mutation({
      query: (credentials) => ({
        url: "/company/password/change",
        method: "PUT",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useChangePassMutation } = changePasswordApiSlice;
