import { apiSlice } from "../../../app/api/apiSlice";

export const verifyUserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyUser: builder.mutation({
      query: (credentials) => ({
        url: "/otp/verifyOtp",
        method: "POST",
        body: { ...credentials },
      }),
      // invalidatesTags: ["User", "UserInfo", "UserEdu"]
    }),
  }),
});

export const { useVerifyUserMutation } = verifyUserApiSlice;
