import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.data.access_token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [
    "User",
    "UserInfo",
    "CompanyJobs",
    "UserEdu",
    "UserCareer",
    "Company",
    "CompanyProfileDetails",
    "Admin",
    "ApproveCompany",
    "ApproveCandidate"
  ],
  endpoints: (builder) => ({}),
});
