import { apiSlice } from "../../../app/api/apiSlice";

export const updateUserEduApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserEdu: builder.mutation({
      query: ({ id, val }) => ({
        url: `/user/education/edit/${id}`,
        method: "PUT",
        body: val,
      }),
      invalidatesTags: ["UserEdu", "UserAllInfo", "GlobalUser"],
    }),
  }),
});

export const { useUpdateUserEduMutation } = updateUserEduApiSlice;
