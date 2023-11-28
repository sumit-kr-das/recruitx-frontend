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
  AdminDashboard,
  ManageUsers,
  ManageCompanies,
} from "./pages";
import UserProfilePage from "./pages/mnjuser/UserProfilePage";
import SearchPage from "./pages/search/SearchPage";
import AuthenticateRoutes from "./protectedRoutes/AuthenticateRoutes";
import CompanyRoutes from "./protectedRoutes/CompanyRoutes";
import UserRoutes from "./protectedRoutes/UserRoutes";
import AuthenticateDashboard from "./protectedRoutes/AuthenticateDashboard";
import { useSelector } from "react-redux";
import { selectCurrentRole } from "./features/auth/authSlice";
import AdminRoutes from "./protectedRoutes/AdminRoutes";

const App = () => {
  const role = useSelector(selectCurrentRole);
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

        {/* dashboard */}
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
                <CompanyRoutes>
                  <CompanyDashboard />
                </CompanyRoutes>
              }
            />
          ) : (
            <Route
              path="/dashboard"
              element={
                <AdminRoutes>
                  <AdminDashboard />
                </AdminRoutes>
              }
            />
          )}
          {/* company  */}
          <Route
            path="/dashboard/company_profile"
            element={
              <CompanyRoutes>
                <CompanyProfile />
              </CompanyRoutes>
            }
          />
          <Route
            path="/dashboard/submit_jobs"
            element={
              <CompanyRoutes>
                <SubmitJobs />
              </CompanyRoutes>
            }
          />
          <Route
            path="/dashboard/my_jobs"
            element={
              <CompanyRoutes>
                <MyJobs />
              </CompanyRoutes>
            }
          />
          <Route
            path="/dashboard/applicants_jobs"
            element={
              <CompanyRoutes>
                <ApplicantsJobs />
              </CompanyRoutes>
            }
          />
          <Route
            path="/dashboard/shortlisted_candidates"
            element={
              <CompanyRoutes>
                <ShortlistedCandidates />
              </CompanyRoutes>
            }
          />
          {/* admin */}
          <Route
            path="/dashboard/admin/manage_user"
            element={
              <AdminRoutes>
                <ManageUsers />
              </AdminRoutes>
            }
          />
          <Route
            path="/dashboard/admin/manage_company"
            element={
              <AdminRoutes>
                <ManageCompanies />
              </AdminRoutes>
            }
          />

          {/* company && admin */}
          <Route path="/dashboard/delete_account" element={<DeleteCompany />} />
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
