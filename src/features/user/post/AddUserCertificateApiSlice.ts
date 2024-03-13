import { apiSlice } from "../../../app/api/apiSlice";

export const addUserCertificateApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    setUserCertificate: builder.mutation({
      query: (credentials) => ({
        url: "/user/certificate/add",
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["UserCertificate", "UserAllInfo"],
    }),
  }),
});

export const { useSetUserCertificateMutation } = addUserCertificateApiSlice;
