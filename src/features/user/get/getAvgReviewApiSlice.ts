import { apiSlice } from "../../../app/api/apiSlice";

export const getAvgReviewApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        avgRatingData: builder.query({
            query: (companyId) => `/company/rating/total/${companyId}`,
            providesTags: ["Review"],
        })
    })
})

export const { useAvgRatingDataQuery } = getAvgReviewApiSlice;