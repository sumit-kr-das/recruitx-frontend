import { AlertTriangle, RefreshCcw } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TApiError } from "../../@types/TApiError";
import { updateStatus } from "../../features/auth/authSlice";
import { useResendOtpMutation } from "../../features/auth/user/resendOtpApiSlice";
import { useVerifyUserMutation } from "../../features/auth/user/verifyUserApiSlice";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { toast } from "../../ui/use-toast";
import { selectCurrentRole } from "../../features/auth/authSlice";
import { useState, useEffect } from "react";

const VerifyUser = () => {
  const [verifyUser] = useVerifyUserMutation();
  const [resendOtp] = useResendOtpMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [seconds, setSeconds] = useState(60);


  const role = useSelector(selectCurrentRole);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ otp: string }>({ mode: "all" });

  const submitForm: SubmitHandler<{ otp: string }> = async (values) => {
    try {

      await verifyUser({ ...values, userType: role }).unwrap();
      dispatch(updateStatus({ status: "verified" }));
      toast({
        description: "OTP verifed successfully",
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

  const resendEmail = async () => {
    try {
      setSeconds(60);
      await resendOtp({
        userType: role,
      }).unwrap();
      toast({
        description: "Check your registered email",
      });
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError?.data.message,
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);


  return (
    <div className="pt-40 w-full h-screen flex justify-center">
      <div className="w-96">
        <h1 className="text-2xl font-extrabold text-center">
          Verify your email
        </h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <Input
            type="text"
            placeholder="Enter OTP"
            className="mt-4"
            {...register("otp", {
              required: "Enter your OTP",
              minLength: {
                value: 6,
                message: "OTP should be 6 digit",
              },
            })}
          />
          {errors.otp && (
            <div className="mt-2 flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-4 w-4" />
              {typeof errors.otp.message === "string" && (
                <p>{errors.otp.message}</p>
              )}
            </div>
          )}
          <Button type="submit" disabled={!isValid} className="w-full mt-4">
            Verify Email
          </Button>
        </form>
        {
          seconds > 0 ? (<>
            <div
              className="mt-2 float-right flex items-center gap-2 font-medium text-blue-600 cursor-pointer"
            >
              Resend after {seconds}s
            </div>
          </>) : (<>
            <div
              onClick={resendEmail}
              className="mt-2 float-right flex items-center gap-2 font-medium text-blue-600 cursor-pointer"
            >
              Resend email <RefreshCcw className="w-4 h-4" />
            </div>
          </>)
        }
        {/* <div
          onClick={resendEmail}
          className="mt-2 float-right flex items-center gap-2 font-medium text-blue-600 cursor-pointer"
        >
          Resend email <RefreshCcw className="w-4 h-4" />
        </div> */}
      </div>
    </div>
  );
};

export default VerifyUser;