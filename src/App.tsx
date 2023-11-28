import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import {
  ApplicantsJobs,
  CompanyDashboard,
  CompanyLogin,
  CompanyProfile,
  CompanyRegister,
  DeleteCompany,
  HomePage,
  Login,
  MyJobs,
  Register,
  ShortlistedCandidates,
  SubmitJobs,
  UserHomePage,
  ChangePassword,
  Logout,
  ErrorPage,
} from "./pages";
import UserProfilePage from "./pages/mnjuser/UserProfilePage";
import SearchPage from "./pages/search/SearchPage";
import AuthenticateRoutes from "./protectedRoutes/AuthenticateRoutes";
import CompanyRoutes from "./protectedRoutes/CompanyRoutes";
import UserRoutes from "./protectedRoutes/UserRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        {/* default */}
        <Route path="/" element={<HomePage />} />
        {/* user */}
        <Route
          path="/login"
          element={
            <AuthenticateRoutes>
              <Login />
            </AuthenticateRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <AuthenticateRoutes>
              <Register />
            </AuthenticateRoutes>
          }
        />
        <Route
          path="/userHome"
          element={
            <UserRoutes>
              <UserHomePage />
            </UserRoutes>
          }
        />
        <Route
          path="/userProfile"
          element={
            <UserRoutes>
              <UserProfilePage />
            </UserRoutes>
          }
        />
        <Route path="/search" element={<SearchPage />} />

        {/* company */}
        <Route
          path="/cRegister"
          element={
            <AuthenticateRoutes>
              <CompanyRegister />
            </AuthenticateRoutes>
          }
        />
        <Route
          path="/cLogin"
          element={
            <AuthenticateRoutes>
              <CompanyLogin />
            </AuthenticateRoutes>
          }
        />
        <Route
          path="recruit"
          element={
            <CompanyRoutes>
              <Layout />
            </CompanyRoutes>
          }
        >
          <Route path="/recruit" element={<CompanyDashboard />} />
          <Route path="/recruit/company_profile" element={<CompanyProfile />} />
          <Route path="/recruit/submit_jobs" element={<SubmitJobs />} />
          <Route path="/recruit/my_jobs" element={<MyJobs />} />
          <Route path="/recruit/applicants_jobs" element={<ApplicantsJobs />} />
          <Route
            path="/recruit/shortlisted_candidates"
            element={<ShortlistedCandidates />}
          />
          <Route path="/recruit/delete_account" element={<DeleteCompany />} />
          <Route path="/recruit/change_password" element={<ChangePassword />} />
          <Route path="/recruit/logout" element={<Logout />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
