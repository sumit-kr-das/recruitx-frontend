import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_BASE_URL,
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
  refetchOnFocus: true,
  refetchOnReconnect: true,
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
    "ApproveCandidate",
    "CompanyGlobal",
    "JobChart",
    "CompanyStats",
    "Review",
    "GlobalUser",
    "Apply",
    "UserExp",
    "UserProject",
    "UserCertificate",
    "UserAllInfo",
    "Users"
  ],
  endpoints: () => ({}),
});
