import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfilePage from "./pages/mnjuser/UserProfilePage";
import { selectCurrentRole } from "./features/auth/authSlice";
import SearchPage from "./pages/search/SearchPage";
import { useSelector } from "react-redux";
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
import {
  AuthenticateRoute,
  CompanyRoute,
  UserRoute,
  AuthenticateDashboard,
  AdminRoute,
} from "./protectedRoutes";

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
        <Route path="/search" element={<SearchPage />} />

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
