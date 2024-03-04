import { apiSlice } from "../../../app/api/apiSlice";

interface userEducation {
    userId: string,
    degree: string,
    college: string,
    duration: {
        admissionYear: number,
        passYear: number
    },
    marks: number
}

export const getEducationData = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userEducationData: builder.query<userEducation[], void>({
            query: () => "/user/education/view",
            providesTags: ["UserEdu"]
        }),
    }),
});

export const { useUserEducationDataQuery } = getEducationData;