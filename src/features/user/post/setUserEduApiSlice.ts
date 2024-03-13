import { apiSlice } from "../../../app/api/apiSlice";

export const setUserEduApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    setUserEdu: builder.mutation({
      query: (credentials) => ({
        url: "/user/education/add",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["UserEdu", "UserAllInfo", "GlobalUser"],
    }),
  }),
});

export const { useSetUserEduMutation } = setUserEduApiSlice;
