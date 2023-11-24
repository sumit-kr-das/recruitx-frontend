
import { apiSlice } from "../../app/api/apiSlice";

export const getSearchDataApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		searchData: builder.mutation({
			query: (credentials) => ({
				url: "/job/search",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useSearchDataMutation } = getSearchDataApiSlice;





// import { apiSlice } from "../../app/api/apiSlice";

// interface allExams{
// 	body: string;
// 	id: number;
// 	title: string;
// 	userId: number;
// }

// export const getSearchData = apiSlice.injectEndpoints({
// 	endpoints: (builder) => ({
// 		searchData: builder.query<allExams[], void>({
// 			query: () => "localhost:8000/api/job/search",
// 		}),
// 	}),
// });

// export const { useSearchDataQuery } = getSearchData;

