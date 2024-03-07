import { apiSlice } from "../../../app/api/apiSlice";
import { TUserProject } from "../../../@types/user/TUserProject";

export const getProjectData = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userProjectData: builder.query<TUserProject[], void>({
            query: () => "/user/project/view",
            providesTags: ["UserProject"]
        }),
    }),
});

export const { useUserProjectDataQuery } = getProjectData;