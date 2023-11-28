// default
export { default as HomePage } from "./user/HomePage";

// user
export { default as Login } from "./mnjuser/auth/Login";
export { default as Register } from "./mnjuser/auth/Register";
export { default as UserHomePage } from "./mnjuser/UserHomePage";

// company
export { default as CompanyDashboard } from "./company/CompanyDashboard";
export { default as CompanyRegister } from "./company/cAuth/CompanyRegister";
export { default as CompanyLogin } from "./company/cAuth/CompanyLogin";
export { default as SubmitJobs } from "./company/SubmitJobs";
export { default as MyJobs } from "./company/MyJobs";
export { default as ApplicantsJobs } from "./company/ApplicantsJobs";
export { default as ShortlistedCandidates } from "./company/ShortlistedCandidates";
export { default as CompanyProfile } from "./company/CompanyProfile";
export { default as DeleteCompany } from "./company/DeleteCompany";
export { default as ChangePassword } from "./company/ChangePassword";
export { default as Logout } from "./company/Logout";

// admin
export { default as AdminDashboard } from "./admin/AdminDashboard";
export { default as ManageCompanies } from "./admin/ManageCompanies";
export { default as ManageUsers } from "./admin/ManageUsers";

// error page
export { default as ErrorPage } from "./error/ErrorPage";
