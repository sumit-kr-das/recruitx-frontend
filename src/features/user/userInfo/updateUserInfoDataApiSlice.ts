import { apiSlice } from "../../../app/api/apiSlice";

export const updateUserInfoDataApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		updateUserInfo: builder.mutation({
			query: (credentials) => ({
				url: "/user/info/update",
				method: "PUT",
				body: { ...credentials },
			}),
			invalidatesTags: ["UserInfoData"],
		}),
	}),
});

export const { useUpdateUserInfoMutation } = updateUserInfoDataApiSlice;
