import { apiSlice } from "../../../app/api/apiSlice";

export const resendOtpApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resendOtp: builder.mutation({
      query: (credentials) => ({
        url: "/otp/resendOtp",
        method: "POST",
        body: { ...credentials },
      }),
      // invalidatesTags: ["User", "UserInfo", "UserEdu"]
    }),
  }),
});

export const { useResendOtpMutation } = resendOtpApiSlice;
