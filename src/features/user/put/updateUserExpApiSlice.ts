import { apiSlice } from "../../../app/api/apiSlice";

export const updateUserExpApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserExp: builder.mutation({
      query: ({ id, val }) => ({
        url: `/user/exprience/edit/${id}`,
        method: "PUT",
        body: val,
      }),
      invalidatesTags: ["UserExp", "UserAllInfo"],
    }),
  }),
});

export const { useUpdateUserExpMutation } = updateUserExpApiSlice;
