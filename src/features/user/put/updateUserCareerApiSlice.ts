import { apiSlice } from "../../../app/api/apiSlice";

export const updateUserCareerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateUserCareer: builder.mutation({
      query: ({ id, val }) => ({
        url: `/user/carrer/edit/${id}`,
        method: "PUT",
        body: val,
      }),
      invalidatesTags: ["UserCareer", "UserAllInfo"],
    }),
  }),
});

export const { useUpdateUserCareerMutation } = updateUserCareerApiSlice;
