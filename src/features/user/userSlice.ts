import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../@types/features/userSlice";
import { RootState } from "../../app/store";

const initialState: UserState = {
  user: {
    name: null,
    email: null,
    phoneNo: null,
    workStatus: null,
    createdAt: null,
    updatedAt: null,
    status: null,
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
    updateUserPhoto: (state: UserState, action) => {
      state.info.photo = action.payload.photo;
    },
    removeUserData: () => {
      return initialState;
    },
  },
});

export const { setUserData, removeUserData, updateUserPhoto } =
  userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUserData = (state: RootState) => state.user;
