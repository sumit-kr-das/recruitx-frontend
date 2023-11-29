import { apiSlice } from "../../../app/api/apiSlice";

export const deleteUserEduApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteUserEdu: builder.mutation({
      query: (id) => ({
        url: `/user/education/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["UserEdu"],
    }),
  }),
});

export const { useDeleteUserEduMutation } = deleteUserEduApiSlice;
