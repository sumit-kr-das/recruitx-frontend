import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type JobState = {
  page: number;
  limit: number;
  total: number;
  jobs: [];
};

const initialState: JobState = {
  page: 0,
  limit: 0,
  total: 0,
  jobs: [],
};

const userJobsSlice = createSlice({
  name: "userJobs",
  initialState,
  reducers: {
    setUserJobsData: (_, action: PayloadAction<JobState>) => {
      return action.payload;
    },
    removeCompanyData: () => {
      return initialState;
    },
  },
});

export const { setUserJobsData, removeCompanyData } = userJobsSlice.actions;
export default userJobsSlice.reducer;

export const selectCurrentUserJobsData = (state: RootState) => state.userJobs;
