import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AuthState } from "../../@types/features/authSlice";

// let isExist = null;
// if (typeof window !== "undefined") {
// 	isExist = JSON.parse(localStorage.getItem("user") || "{}");
// }

const isExist = JSON.parse(localStorage.getItem("user") || "{}")
	? JSON.parse(localStorage.getItem("user") || "{}")
	: null;

const initialState: AuthState = {
	user: isExist ? isExist.user : null,
	role: isExist ? isExist.role : null,
	token: isExist ? isExist.token : null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (
			state: AuthState,
			action: PayloadAction<{
				user: string;
				role: string;
				access_token: string;
			}>
		) => {
			const { user, role, access_token } = action.payload;
			state.user = user;
			state.role = role;
			state.token = access_token;
			localStorage.setItem(
				"user",
				JSON.stringify({
					access_token: access_token,
					role: role,
					user: user,
				})
			);
		},
		logout: (state: AuthState) => {
			localStorage.removeItem("user");
			state.user = null;
			state.role = null;
			state.token = null;
		},
	},
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentRole = (state: RootState) => state.auth.role;
export const selectCurrentToken = (state: RootState) => state.auth.token;
