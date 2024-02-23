import { apiSlice } from "../../../app/api/apiSlice";

interface SearchCompany {
    total: number,
    companies: [{
        _id: string,
        name: string,
        email: string,
        phone: string,
        password: string,
        companyName: string,
        industry: string,
        designation: string,
        pin: string,
        address: string,
        role: string,
        status: string,
        createdAt: string,
        updatedAt: string,
        __v: number,
        companyProfileId: {
            _id: string,
            logo: string,
            type: string
        }
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