import { apiSlice } from "../../../app/api/apiSlice";

type TUserEducation = {
  _id: string;
  degree: string;
  college: string;
  course: string;
  courseType: string;
  admissionYear: number;
  passYear: number;
  marks: number;
};

export const getUserInfoDataApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserEdu: builder.query<TUserEducation[], void>({
      query: () => "/user/education/view",
      providesTags: ["UserEdu"],
    }),
  }),
});

export const { useGetUserEduQuery } = getUserInfoDataApiSlice;
