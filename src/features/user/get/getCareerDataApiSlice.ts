import { apiSlice } from "../../../app/api/apiSlice";

interface userCareer{
    userId:string,
    industry:string,
    role:string,
    jobRole:string,
    jobType:string,
    employmentType:string,
    // shift:string,
    location:[string],
    expectedSalary?:number
}

export const getCareerData = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		userCareerData: builder.query<userCareer[], void>({
			query: () => "/user/carrer/view",
		}),
	}),
});

export const { useUserCareerDataQuery } = getCareerData;