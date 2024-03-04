import { apiSlice } from "../../../app/api/apiSlice";
import { FormValue } from "../../../pages/mnjuser/_components/OtherInfo";

export const getUserInfoDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userInfoData: builder.query<FormValue[], void>({
      query: () => "/user/info/view",
      providesTags: ["UserInfo", "User"],
    }),
  }),
});

export const { useUserInfoDataQuery } = getUserInfoDataApiSlice;
