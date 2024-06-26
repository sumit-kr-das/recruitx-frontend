import { apiSlice } from "../../../app/api/apiSlice";

export const updateUserProjectApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserProject: builder.mutation({
      query: ({ id, val }) => ({
        url: `/user/project/update/${id}`,
        method: "PUT",
        body: val,
      }),
      invalidatesTags: ["UserProject", "UserAllInfo"],
    }),
  }),
});

export const { useUpdateUserProjectMutation } = updateUserProjectApiSlice;
