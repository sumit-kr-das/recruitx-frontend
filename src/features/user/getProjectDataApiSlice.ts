import { apiSlice } from "../../app/api/apiSlice";

interface userProject{
    userId:string,
    name:string,
    description:string,
    skills:[string],
    startDate:Date,
    endDate?:Date,
    associate:string
}

export const getProjectData = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		userProjectData: builder.query<userProject[], void>({
			query: () => "/user/project/view",
		}),
	}),
});

export const { useUserProjectDataQuery } = getProjectData;