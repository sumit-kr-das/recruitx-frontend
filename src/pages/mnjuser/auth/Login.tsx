import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TApiError } from "../../../@types/TApiError";
import TopHeader from "../../../components/navigation/TopHeader";
import { setCredentials } from "../../../features/auth/authSlice";
import { useUserLoginMutation } from "../../../features/auth/user/userLoginApiSlice";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { useToast } from "../../../ui/use-toast";

const userRoles = [
  {
    id: 1,
    type: "User Login",
    desc: "I'm looking for job",
  },
  {
    id: 2,
    type: "Recruiter Login",
    desc: "I'm looking for candidates",
  },
  {
    id: 3,
    type: "Admin Login",
    desc: "I'm authorized admin",
  },
];

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const [formStep, setFormStep] = useState(0);
  const [type, setType] = useState(0);
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "all" });

  const completeFormStep = () => {
    setFormStep((prev) => prev + 1);
  };
  const submitForm: SubmitHandler<FormValues> = async (values) => {
    try {
      const userData = await userLogin(values).unwrap();
      console.log(values, userData);
      dispatch(setCredentials(userData));
      toast({
        description: "Log In success",
      });
      navigate("/mnjuser/home");
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError?.data.message,
      });
    }
  };
  return (
    <>
      {/* navigation */}
      <TopHeader />
      <div className="pt-40 w-full h-screen flex justify-center">
        <div className="w-96">
          <h1 className="text-4xl font-extrabold text-center">
            Login Your <br /> RecruitX Account
          </h1>
          <form onSubmit={handleSubmit(submitForm)}>
            {/* select options */}
            {formStep === 0 && (
              <section>
                <p className="text-xs mt-6">Login Type</p>
                {userRoles?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setType(item.id)}
                    className={`mt-2  border border-gray-200 p-2 rounded-md cursor-pointer ${
                      type === item.id && "bg-slate-200"
                    }  `}
                  >
                    <h3 className="font-medium">{item.type}</h3>
                    <p className="text-xs">{item.desc}</p>
                  </div>
                ))}
                <Button
                  onClick={completeFormStep}
                  type="button"
                  className="w-full mt-4"
                >
                  Continue
                </Button>
              </section>
            )}

            {/* form */}
            {formStep === 1 && (
              <section>
                <Input
                  type="email"
                  placeholder="Email"
                  className="mt-6"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                {errors.email && (
                  <div className="mt-2 flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-4 w-4" />
                    {typeof errors.email.message === "string" && (
                      <p>{errors.email.message}</p>
                    )}
                  </div>
                )}
                <Input
                  type="password"
                  placeholder="Password"
                  className="mt-4"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password should be min 5 character log",
                    },
                  })}
                />
                {errors.password && (
                  <div className="mt-2 flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-4 w-4" />
                    {typeof errors.password.message === "string" && (
                      <p>{errors.password.message}</p>
                    )}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={!isValid || isLoading}
                  className="w-full mt-4"
                >
                  Log In
                </Button>
              </section>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
