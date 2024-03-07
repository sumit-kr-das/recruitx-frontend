import { apiSlice } from "../../../app/api/apiSlice";
import { TUserCareer } from "../../../@types/user/TUserCareer";

export const getCareerData = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        userCareerData: builder.query<TUserCareer, void>({
            query: () => "/user/carrer/view",
            providesTags: ["UserCareer"]
        }),
    }),
});

export const { useUserCareerDataQuery } = getCareerData;