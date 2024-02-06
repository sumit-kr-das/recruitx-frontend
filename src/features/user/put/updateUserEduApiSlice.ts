import { apiSlice } from "../../../app/api/apiSlice";

export const updateUserEduApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserEdu: builder.mutation({
      query: ({ id, credentials }) => ({
        url: `/user/education/edit/${id}`,
        method: "PUT",
        body: credentials,
      }),
      invalidatesTags: ["UserEdu"],
    }),
  }),
});

export const { useUpdateUserEduMutation } = updateUserEduApiSlice;
