import { AlertTriangle, RefreshCcw } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TApiError } from "../../@types/TApiError";
import { useVerifyUserMutation } from "../../features/auth/user/verifyUserApiSlice";
import { useResendOtpMutation } from "../../features/auth/user/resendOtpApiSlice";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { toast } from "../../ui/use-toast";
import { useDispatch } from "react-redux";
import { setCredentials, updateStatus } from "../../features/auth/authSlice";

const VerifyUser = () => {
  const [verifyUser] = useVerifyUserMutation();
  const [resendOtp] = useResendOtpMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ otp: string }>({ mode: "all" });

  const submitForm: SubmitHandler<{ otp: string }> = async (values) => {
    try {
      await verifyUser(values).unwrap();
        dispatch(updateStatus({status: "verified"}));
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
      await resendOtp({}).unwrap();
      toast({
        description: "Check your registered email",
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
        <div
          onClick={resendEmail}
          className="mt-2 float-right flex items-center gap-2 font-medium text-blue-600 cursor-pointer"
        >
          Resend email <RefreshCcw className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default VerifyUser;
