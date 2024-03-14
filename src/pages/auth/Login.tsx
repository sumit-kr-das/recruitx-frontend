import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TApiError } from "../../@types/TApiError";
import TopHeader from "../../components/navigation/TopHeader";
import { setCredentials } from "../../features/auth/authSlice";
import { useUserLoginMutation } from "../../features/auth/user/userLoginApiSlice";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useToast } from "../../ui/use-toast";
import { useCLoginMutation } from "../../features/auth/company/companyLoginApiSlice";
import { useALoginMutation } from "../../features/auth/admin/companyLoginApiSlice";

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
  const [userLogin, { isLoading: userLoading }] = useUserLoginMutation();
  const [cLogin, { isLoading: companyLoading }] = useCLoginMutation();
  const [aLogin, { isLoading: adminLoading }] = useALoginMutation();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "all" });

  const completeFormStep = () => {
    setFormStep((prev) => prev + 1);
  };

  const submitForm: SubmitHandler<FormValues> = async (values) => {
    try {
      let userData;
      if (type === 1) {
        userData = await userLogin(values).unwrap();
      } else if (type === 2) {
        userData = await cLogin(values).unwrap();
      } else if (type === 3) {
        userData = await aLogin(values).unwrap();
      }
      dispatch(setCredentials(userData));
      toast({
        description: "User login successfully",
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
    <section className="bg-[#FAFAFA]">
      <TopHeader />
      <div className="pt-40 w-full h-screen flex justify-center">
        <div className="md:w-[500px] h-fit md:rounded-xl md:bg-white p-10 md:shadow">
          <h1 className="text-2xl font-extrabold text-center">
            Login Your RecruitX Account
          </h1>
          <form onSubmit={handleSubmit(submitForm)}>
            {/* select options */}
            {formStep === 0 && (
              <>
                <p className="mt-2 mb-5 text-center">
                  Choose according to your usability
                </p>
                <section>
                  <p className="text-xs">Login Type</p>
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
              </>
            )}

            {/* form */}
            {formStep === 1 && (
              <>
                {" "}
                {type === 1 || type === 2 ? (
                  <p className="mt-2 mb-5 md:mb-10 text-center">
                    Don't have an account ?
                    <Link
                      className="text-blue-500"
                      to={
                        type === 1 ? "/mnjuser/register" : "/recruit/register"
                      }
                    >
                      {" "}
                      Register now
                    </Link>
                  </p>
                ) : (
                  <p className="mt-2 mb-5 md:mb-10 text-center">
                    Don't have an account ? Contact with admin
                  </p>
                )}
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
                    disabled={
                      !isValid || userLoading || companyLoading || adminLoading
                    }
                    className="w-full mt-4"
                  >
                    Log In
                  </Button>
                </section>
                <p className="mt-2 float-right font-medium ">
                  Forgot password?
                  <Link
                    className="text-blue-500"
                    to={`/forget-password/${type}`}
                  >
                    {" "}
                    Click here
                  </Link>
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
