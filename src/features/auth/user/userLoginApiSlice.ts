import { apiSlice } from "../../../app/api/apiSlice";

export const userLoginApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		userLogin: builder.mutation({
			query: (credentials) => ({
				url: "/user/auth/login",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useUserLoginMutation } = userLoginApiSlice;