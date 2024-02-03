import { UserState } from "../../../@types/features/userSlice";
import { apiSlice } from "../../../app/api/apiSlice";

export const getUserGlobalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserGlobal: builder.query<UserState, void>({
      query: () => "/user/globals",
    }),
  }),
});

export const { useLazyGetUserGlobalQuery } = getUserGlobalApiSlice;
