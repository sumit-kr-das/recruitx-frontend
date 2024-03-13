import { apiSlice } from "../../../app/api/apiSlice";

export const AddUserExpApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addUserExp: builder.mutation({
      query: (credentials) => ({
        url: "/user/exprience/add",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["UserExp", "UserAllInfo"],
    }),
  }),
});

export const { useAddUserExpMutation } = AddUserExpApiSlice;
