import { apiSlice } from "../../../app/api/apiSlice";

export interface SearchCompany {
    total: number,
    companies: [{
        _id: string;
        address: string;
        companyName: string;
        email: string;
        industry: string;
        name: string;
        phone: string;
        pin: string;
        status: string,
        companyProfileId?: {
            _id?: string;
            logo?: string;
            type: string;
        };
    }],
    limit: number
}

export const searchCompanyApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchCompany: builder.query<SearchCompany, { search: string, page: number }>({
            query: ({ search, page }) => `/company/search?search=${search}&page=${page}`,
        })
    })
})

export const { useLazySearchCompanyQuery } = searchCompanyApiSlice;