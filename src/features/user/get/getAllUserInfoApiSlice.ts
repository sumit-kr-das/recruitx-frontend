import { apiSlice } from "../../../app/api/apiSlice";
import { UserAllInfo } from "../../../@types/features/UserAllInfoSlice";
export const getAllUserInfoApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUserInfo: builder.query<UserAllInfo[], void>({
      query: () => "/user/all/info/view",
      providesTags: ["UserAllInfo"],
    }),
  }),
});

export const { useGetAllUserInfoQuery } = getAllUserInfoApiSlice;
