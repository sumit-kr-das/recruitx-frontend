import { apiSlice } from "../../../app/api/apiSlice";

export const updateUserProfileApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		updateUser: builder.mutation({
			query: (credentials) => ({
				url: "/user/edit",
				method: "PUT",
				body: { ...credentials },
			}),
            invalidatesTags: ['User']
		}),
	}),
});

export const { useUpdateUserMutation } = updateUserProfileApiSlice;
