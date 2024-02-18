import { CompanyState } from "../../../@types/features/companySlice";
import { apiSlice } from "../../../app/api/apiSlice";

export const getCompanyGlobalApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCompanyGlobal: builder.query<CompanyState, void>({
            query: () => "/company/globals",
            providesTags: ["CompanyGlobal", "Company", "CompanyProfileDetails"],
        }),
    }),
});

export const { useLazyGetCompanyGlobalQuery } = getCompanyGlobalApiSlice;