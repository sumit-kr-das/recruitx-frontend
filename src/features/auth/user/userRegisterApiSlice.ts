import { apiSlice } from "../../../app/api/apiSlice";

export const companyLoginApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		userRegister: builder.mutation({
			query: (credentials) => ({
				url: "/user/auth/register",
				method: "POST",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useUserRegisterMutation } = companyLoginApiSlice;
