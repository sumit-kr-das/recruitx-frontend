import { apiSlice } from "../../../app/api/apiSlice";

export const setUserInfoDataApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		setUser: builder.mutation({
			query: (credentials) => ({
				url: "/user/info/add",
				method: "POST",
				body: { ...credentials },
			}),
			invalidatesTags: ["UserInfo"],
		}),
	}),
});

export const { useSetUserMutation } = setUserInfoDataApiSlice;
