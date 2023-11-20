import { apiSlice } from "../../app/api/apiSlice";

export const getSearchData = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		searchData: builder.query({
			query: () => ({
				url: "https://jsonplaceholder.typicode.com/posts",
				method: "GET",
			}),
		}),
	}),
});

export const { useSearchDataQuery } = getSearchData;
