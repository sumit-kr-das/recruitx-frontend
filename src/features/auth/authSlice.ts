import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { AuthState } from "../../@types/features/authSlice";

const isExist = JSON.parse(localStorage.getItem("user") || "{}")
  ? JSON.parse(localStorage.getItem("user") || "{}")
  : null;

const initialState: AuthState = {
  status: isExist ? isExist.status : null,
  data: {
    user: isExist ? isExist?.data?.user : null,
    role: isExist ? isExist?.data?.role : null,
    access_token: isExist ? isExist?.data?.access_token : null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state: AuthState, action: PayloadAction<AuthState>) => {
      const {
        status,
        data: { user, role, access_token },
      } = action.payload;
      state.status = status;
      state.data.user = user;
      state.data.role = role;
      state.data.access_token = access_token;
      localStorage.setItem(
        "user",
        JSON.stringify({
          status: status,
          data: {
            user: user,
            role: role,
            access_token: access_token,
          },
        })
      );
    },
    updateStatus: (state, action) => {
      const { status } = action.payload;
      state.status = status;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout: (state: AuthState) => {
      localStorage.removeItem("user");
      state.status = null;
      state.data.user = null;
      state.data.role = null;
      state.data.access_token = null;

      console.log("logout", state.data.access_token);
    },
  },
});

export const { setCredentials, updateStatus, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentStatus = (state: RootState) => state.auth.status;
export const selectCurrentUser = (state: RootState) => state.auth.data.user;
export const selectCurrentRole = (state: RootState) => state.auth.data.role;
export const selectCurrentToken = (state: RootState) =>
  state.auth.data.access_token;
