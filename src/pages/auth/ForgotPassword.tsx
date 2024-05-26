import { useState } from 'react'
import TopHeader from '../../components/navigation/TopHeader'
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { useForgetPasswordOtpMutation } from '../../features/forgetpassword/ForgetPasswordOtpApiSlice';
import { useVerifyUserMutation } from '../../features/auth/user/verifyUserApiSlice';
import { useResetPasswordMutation } from '../../features/forgetpassword/ResetPasswordApiSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '../../ui/use-toast';
import { TApiError } from '../../@types/TApiError';

const emailSchema = z.object({
  email: z.string().min(1, {
    message: "email is required"
  }).email()
})

const otpSchema = z.object({
  otp: z.string().min(1, {
    message: "Please enter otp"
  })
});

const passwordSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be minimum 6 digits"
  })
});

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [forgetPasswordOtp] = useForgetPasswordOtpMutation();
  const [verifyUser] = useVerifyUserMutation();
  const [resetPassword] = useResetPasswordMutation();
  const { type } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  const emailForm = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: ""
    }
  });

  const otpForm = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: ""
    }
  })

  const passwordForm = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: ""
    }
  })

  const submitEmail = async (value: { email: string }) => {
    try {
      await forgetPasswordOtp({ ...value, role: type }).unwrap();
      setEmail(value.email);
      toast({
        description: "Otp sent to your email"
      })
      setStep(2)
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError?.data.message,
      });
    }

  }

  const submitOtp = async (value: { otp: string }) => {
    try {
      await verifyUser({ ...value, userType: type, email }).unwrap();
      toast({
        description: "OTP verifed successfully",
      });
      setStep(3);
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError?.data.msg,
      });
    }
  }

  const submitPassword = async (value: { password: string }) => {
    try {
      await resetPassword({ password: value.password, email, role: type }).unwrap();
      localStorage.clear();
      toast({
        description: "Password reseted. Please login now"
      });
      navigate(`/login`);
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError?.data.message,
      });
    }
  }

  return (
    <>
      <TopHeader />
      <div className='pt-40 w-full h-screen flex justify-center'>
        <div className='w-96'>
          <h1 className='text-4xl font-extrabold text-center'>
            Reset Password
          </h1>
          {
            step === 1 && (<>
              <Form {...emailForm}>
                <form onSubmit={emailForm.handleSubmit(submitEmail)}>
                  <FormField
                    control={emailForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormControl>
                          <Input placeholder="Enter Eamil" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className='mt-4 w-full' type='submit'>Next</Button>
                </form>
              </Form>
            </>)
          }
          {
            step === 2 && (
              <>
                <Form {...otpForm}>
                  <form onSubmit={otpForm.handleSubmit(submitOtp)}>
                    <FormField
                      control={otpForm.control}
                      name="otp"
                      render={({ field }) => (
                        <FormItem className="mt-6">
                          <FormControl>
                            <Input placeholder="Enter Otp" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button className='mt-4 w-full' type='submit'>Next</Button>
                  </form>
                </Form>
              </>
            )
          }
          {
            step === 3 && (
              <>
                <Form {...passwordForm}>
                  <form onSubmit={passwordForm.handleSubmit(submitPassword)}>
                    <FormField
                      control={passwordForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem className="mt-6">
                          <FormControl>
                            <Input placeholder="Enter new password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button className='mt-4 w-full' type='submit'>Submit</Button>
                  </form>
                </Form>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default ForgotPassword