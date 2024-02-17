import LoginBg from "../../../assets/bg.jpg";
import { setCredentials } from "../../../features/auth/authSlice";
import { useCLoginMutation } from "../../../features/auth/company/companyLoginApiSlice";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useALoginMutation } from "../../../features/auth/admin/companyLoginApiSlice";

type TINITIAL_USER_STATE = {
  email: string;
  password: string;
};

const INITIAL_USER_STATE: TINITIAL_USER_STATE = {
  email: "",
  password: "",
};

const CompanyLogin = () => {
  const [tab, setTab] = useState(false);
  const [user, setUser] = useState(INITIAL_USER_STATE);
  const [cLogin, { isLoading }] = useCLoginMutation();
  const [aLogin] = useALoginMutation();
  const dispatch = useDispatch();

  const handleUserValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (tab) {
        const userData = await aLogin(user).unwrap();
        dispatch(setCredentials(userData));
        setUser(INITIAL_USER_STATE);
        toast.success("Login successfull");
      } else {
        const userData = await cLogin(user).unwrap();
        dispatch(setCredentials(userData));
        setUser(INITIAL_USER_STATE);
        toast.success("Login successfull");
      }
    } catch (err) {
      toast.error("Enter valid credentials");
      console.log("Error on company login", err);
    }
  };
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src={LoginBg}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="block text-white" to="/">
              <span className="sr-only">Home</span>
              <img src="/vite.svg" alt="vite" />
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to RecruitX
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              RecruitX help you get hired, faster: from preparing your CV,
              getting recruiter attention, finding the right jobs, and more!
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                to="/"
              >
                <span className="sr-only">Home</span>
                <img src="/vite.svg" alt="vite" />
              </Link>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to RecruitX
              </h1>

              <p className="text-sm mt-4 leading-relaxed text-gray-500">
                RecruitX help you get hired, faster: from preparing your CV,
                getting recruiter attention, finding the right jobs, and more!
              </p>
            </div>

            <div>
              <div className="mt-10 mb-5">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex items-center justify-center gap-6">
                    <div
                      onClick={() => setTab(false)}
                      className={`${!tab
                          ? "rounded-t-lg border text-sky-600 border-gray-300 border-b-white"
                          : "border-transparent"
                        } shrink-0 border  p-3 text-sm font-semibold text-gray-500  cursor-pointer`}
                    >
                      Company
                    </div>
                    <div
                      onClick={() => setTab(true)}
                      className={`${tab
                          ? "rounded-t-lg border text-sky-600 border-gray-300 border-b-white"
                          : "border-transparent"
                        } font-semibold shrink-0 text-gray-500 p-3 text-sm cursor-pointer`}
                    >
                      Admin
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  required
                  value={user.email}
                  onChange={handleUserValue}
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  required
                  value={user.password}
                  onChange={handleUserValue}
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    required
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline">
                    terms and conditions
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  {isLoading ? "Loading..." : "Log in"}
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Don't have an account?{" "}
                  <Link
                    to="/recruit/register"
                    className="text-gray-700 underline"
                  >
                    Register now
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default CompanyLogin;
