import { apiSlice } from "../../../app/api/apiSlice";

export const getUserCareerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserCareer: builder.query({
      query: () => "/user/carrer/view",
      providesTags: ["UserCareer"],
    }),
  }),
});

export const { useGetUserCareerQuery } = getUserCareerApiSlice;
