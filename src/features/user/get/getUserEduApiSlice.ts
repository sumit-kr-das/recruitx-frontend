import { apiSlice } from "../../../app/api/apiSlice";

export const getUserInfoDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserEdu: builder.query({
      query: () => "/user/education/view",
      providesTags: ["UserEdu"],
    }),
  }),
});

export const { useGetUserEduQuery } = getUserInfoDataApiSlice;
