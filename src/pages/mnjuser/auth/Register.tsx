import { AlertTriangle } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TApiError } from "../../../@types/TApiError";
import { setCredentials } from "../../../features/auth/authSlice";
import { useUserRegisterMutation } from "../../../features/auth/user/userRegisterApiSlice";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";

type FormValues = {
  name: string;
  email: string;
  phoneNo: string;
  workStatus: string;
  password: string;
};

const Register = () => {
  const [userRegister, { isLoading }] = useUserRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "all" });

  const submitForm: SubmitHandler<FormValues> = async (user) => {
    try {
      console.log(user);
      const userData = await userRegister(user).unwrap();
      dispatch(setCredentials(userData));
      toast.success("Register successfull");
      navigate("/mnjuser/home");
    } catch (err) {
      const apiError = err as TApiError;
      toast.error(apiError?.data.message);
    }
  };
  return (
    <>
      <div className="pt-40 w-full h-screen flex justify-center">
        <div className="w-96">
          <h1 className="text-4xl font-extrabold text-center">
            Login Your <br /> RecruitX Account
          </h1>
          <form onSubmit={handleSubmit(submitForm)}>
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
          </form>
          <div className="mt-2 float-right font-medium text-blue-600">
            <Link to={`/reset-password`}>
              <p>Forgot password? Click here</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
