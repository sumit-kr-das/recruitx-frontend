import { apiSlice } from "../../app/api/apiSlice";

interface allExams{
	body: string;
	id: number;
	title: string;
	userId: number;
}

export const getSearchData = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		searchData: builder.query<allExams[], void>({
			query: () => "https://jsonplaceholder.typicode.com/posts",
		}),
	}),
});

export const { useSearchDataQuery } = getSearchData;
