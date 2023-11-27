import { apiSlice } from "../../app/api/apiSlice";

export const deleteAccountApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		deleteAccount: builder.mutation({
			query: (credentials) => ({
				url: "/company/delete",
				method: "DELETE",
				body: { ...credentials },
			}),
		}),
	}),
});

export const { useDeleteAccountMutation } = deleteAccountApiSlice;
