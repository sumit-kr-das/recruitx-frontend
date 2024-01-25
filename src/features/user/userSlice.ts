import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../@types/features/userSlice";

const initialState: UserState = {
  user: {
    name: null,
    email: null,
    phoneNo: null,
    workStatus: null,
    createdAt: null,
    updatedAt: null,
  },
  info: {
    photo: null,
    objective: null,
  },
  education: {
    degree: null,
    college: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state: UserState, action: PayloadAction<UserState>) => {
      return {
        ...state,
        user: { ...action.payload.user },
        info: { ...action.payload.info },
        education: { ...action.payload.education },
      };
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
