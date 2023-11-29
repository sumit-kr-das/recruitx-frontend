import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { selectCurrentRole } from "./features/auth/authSlice";
import Layout from "./layout/Layout";
import UserProfilePage from "./pages/mnjuser/UserProfilePage";
import SearchPage from "./pages/search/SearchPage";

// --------------------------- pages ---------------------------
const HomePage = lazy(() => import("./pages/user/HomePage"));

const Login = lazy(() => import("./pages/mnjuser/auth/Login"));
const Register = lazy(() => import("./pages/mnjuser/auth/Register"));
const UserHomePage = lazy(() => import("./pages/mnjuser/UserHomePage"));
const JobDetailsPage = lazy(() => import("./pages/user/JobDetailsPage"));

const CompanyDashboard = lazy(() => import("./pages/company/CompanyDashboard"));
const CompanyRegister = lazy(
  () => import("./pages/company/cAuth/CompanyRegister")
);
const CompanyLogin = lazy(() => import("./pages/company/cAuth/CompanyLogin"));
const SubmitJobs = lazy(() => import("./pages/company/SubmitJobs"));
const MyJobs = lazy(() => import("./pages/company/MyJobs"));
const ApplicantsJobs = lazy(() => import("./pages/company/ApplicantsJobs"));
const ShortlistedCandidates = lazy(
  () => import("./pages/company/ShortlistedCandidates")
);
const CompanyProfile = lazy(() => import("./pages/company/CompanyProfile"));
const DeleteCompany = lazy(() => import("./pages/company/DeleteCompany"));
const ChangePassword = lazy(() => import("./pages/company/ChangePassword"));
const Logout = lazy(() => import("./pages/company/Logout"));

const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const ManageCompanies = lazy(() => import("./pages/admin/ManageCompanies"));
const ManageUsers = lazy(() => import("./pages/admin/ManageUsers"));

const ErrorPage = lazy(() => import("./pages/error/ErrorPage"));

// --------------------------- route authenticator ---------------------------
import {
  AdminRoute,
  AuthenticateDashboard,
  AuthenticateRoute,
  CompanyRoute,
  UserRoute,
} from "./protectedRoutes";

const App = () => {
  const role = useSelector(selectCurrentRole);
  return (
    <BrowserRouter>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Routes>
        {/* default */}
        <Route
          path="/"
          element={
            <Suspense fallback={"Loading...."}>
              <HomePage />
            </Suspense>
          }
        />
        {/* user */}
        <Route
          path="/login"
          element={
            <AuthenticateRoute>
              <Login />
            </AuthenticateRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AuthenticateRoute>
              <Register />
            </AuthenticateRoute>
          }
        />
        <Route
          path="/userHome"
          element={
            <UserRoute>
              <UserHomePage />
            </UserRoute>
          }
        />
        <Route
          path="/userProfile"
          element={
            <UserRoute>
              <UserProfilePage />
            </UserRoute>
          }
        />
        <Route
          path="/search"
          element={
            <Suspense fallback={"Loading...."}>
              <SearchPage />
            </Suspense>
          }
        />
        <Route
          path="/jobDetails"
          element={
            <Suspense fallback={"Loading...."}>
              <JobDetailsPage />
            </Suspense>
          }
        />

        {/* dashboard */}
        <Route
          path="/cRegister"
          element={
            <AuthenticateRoute>
              <CompanyRegister />
            </AuthenticateRoute>
          }
        />
        <Route
          path="/cLogin"
          element={
            <AuthenticateRoute>
              <CompanyLogin />
            </AuthenticateRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <AuthenticateDashboard>
              <Layout />
            </AuthenticateDashboard>
          }
        >
          {role === "company" ? (
            <Route
              path="/dashboard"
              element={
                <CompanyRoute>
                  <CompanyDashboard />
                </CompanyRoute>
              }
            />
          ) : (
            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
          )}
          {/* company  */}
          <Route
            path="/dashboard/company_profile"
            element={
              <CompanyRoute>
                <CompanyProfile />
              </CompanyRoute>
            }
          />
          <Route
            path="/dashboard/submit_jobs"
            element={
              <CompanyRoute>
                <SubmitJobs />
              </CompanyRoute>
            }
          />
          <Route
            path="/dashboard/my_jobs"
            element={
              <CompanyRoute>
                <MyJobs />
              </CompanyRoute>
            }
          />
          <Route
            path="/dashboard/applicants_jobs"
            element={
              <CompanyRoute>
                <ApplicantsJobs />
              </CompanyRoute>
            }
          />
          <Route
            path="/dashboard/shortlisted_candidates"
            element={
              <CompanyRoute>
                <ShortlistedCandidates />
              </CompanyRoute>
            }
          />
          <Route
            path="/dashboard/delete_account"
            element={
              <CompanyRoute>
                <DeleteCompany />
              </CompanyRoute>
            }
          />

          {/* admin */}
          <Route
            path="/dashboard/admin/manage_user"
            element={
              <AdminRoute>
                <ManageUsers />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard/admin/manage_company"
            element={
              <AdminRoute>
                <ManageCompanies />
              </AdminRoute>
            }
          />

          {/* company & admin */}
          <Route
            path="/dashboard/change_password"
            element={<ChangePassword />}
          />
          <Route path="/dashboard/logout" element={<Logout />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
