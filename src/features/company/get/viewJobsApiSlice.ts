import { apiSlice } from "../../../app/api/apiSlice";

 interface job {
  _id: string,
  title: string,
  category: string,
  description: string,
  tags: [string],
  active: boolean,
  comapanyId: {
    _id: string,
    companyName: string,
    companyProfileId: {
      _id: string,
      logo: string
    }
  },
  info: {
    vacancies: number,
    jobType: string,
    workplaceType: string,
    startDate: string,
    endDate: string,
    roles: string,
    skills: [string],
    minExprience: number,
    maxExprience: number,
    minSalary: number,
    maxSalary: number,
    location: string,
    maxQualification: string,
    degree: string
  },
}

export const viewJobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    viewJobs: builder.query<job[], void>({
      query: () => "/job/view",
      providesTags: ["CompanyJobs"],
    }),
  }),
});

export const { useViewJobsQuery } = viewJobsApiSlice;
