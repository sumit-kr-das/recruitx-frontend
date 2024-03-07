import { apiSlice } from "../../../app/api/apiSlice";

interface userCertification {
    userId: string,
    title: string,
    source: string,
    description: string,
    // certificate:string,
    startDate: Date,
    endDate?: Date
}

export const getCertificationData = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userCertificationData: builder.query<userCertification[], void>({
            query: () => "/user/certificate/view",
            providesTags: ["UserCertificate"]
        }),
    }),
});

export const { useUserCertificationDataQuery } = getCertificationData;