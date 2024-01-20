import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TApiError } from "../../../@types/TApiError";
import { setCredentials } from "../../../features/auth/authSlice";
import LoginBg from "../../../assets/bg.jpg";
import { useUserLoginMutation } from "../../../features/auth/user/userLoginApiSlice";
import TopHeader from "../../../components/navigation/TopHeader";
import { Button } from "../../../ui/button";

type TINITIAL_USER_STATE = {
  email: string;
  password: string;
};

const INITIAL_USER_STATE: TINITIAL_USER_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(INITIAL_USER_STATE);
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUserValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await userLogin(user).unwrap();
      dispatch(setCredentials(userData));
      setUser(INITIAL_USER_STATE);
      navigate("/mnjuser/home");
      toast.success("Login successfull");
    } catch (err) {
      const apiError = err as TApiError;
      toast.error(apiError?.data.message);
    }
  };

  const [type, setType] = useState(0);

  return (
    <section>
      {/* navigation */}
      <TopHeader />
      <div className="pt-40 w-full h-screen flex justify-center">
        {/* select options */}
        <section>
          <h1 className="text-4xl font-extrabold text-center">
            Login Your <br /> RecruitX Account
          </h1>
          <p className="text-xs mt-6">Login Type</p>
          <div className="mt-2 w-96">
            <div
              onClick={() => setType(1)}
              className={`border border-gray-200 p-2 rounded-md cursor-pointer ${
                type === 1 && "bg-slate-200"
              }  `}
            >
              <h3 className="font-medium">User Login</h3>
              <p className="text-xs">I'm looking for job</p>
            </div>
            <div
              onClick={() => setType(2)}
              className={`border border-gray-200 p-2 rounded-md cursor-pointer my-2 ${
                type === 2 && "bg-slate-200"
              }  `}
            >
              <h3 className="font-medium">Recruiter Login</h3>
              <p className="text-xs">I'm looking for candidates</p>
            </div>
            <div
              onClick={() => setType(3)}
              className={`border border-gray-200 p-2 rounded-md cursor-pointer ${
                type === 3 && "bg-slate-200"
              }  `}
            >
              <h3 className="font-medium">Admin Login</h3>
              <p className="text-xs">I'm authorized admin</p>
            </div>
          </div>
          <Button className="w-full mt-4">Continue</Button>
        </section>
      </div>
    </section>
  );
};

export default Login;
