import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import { TApiError } from "../../../@types/TApiError";
import { setCredentials } from "../../../features/auth/authSlice";
import { useUserRegisterMutation } from "../../../features/auth/user/userRegisterApiSlice";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import TopHeader from "../../../components/navigation/TopHeader";
import UserRegisterSchema from "../../../@types/zod/UserRegisterSchema";
import { useToast } from "../../../ui/use-toast";

type FormValues = {
  name: string;
  email: string;
  phoneNo: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [userRegister, { isLoading }] = useUserRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof UserRegisterSchema>>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
    },
  });

  const submitForm: SubmitHandler<FormValues> = async (value) => {
    try {
      const userData = await userRegister(value).unwrap();
      dispatch(setCredentials(userData));
      toast({
        description: "User registered successfully",
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
      <div className="pt-20 md:pt-40 w-full h-screen flex justify-center">
        <div className="md:w-[800px] h-fit md:rounded-xl bg-white p-10 md:shadow">
          <h1 className="text-2xl font-extrabold text-center">
            Register Your RecruitX Account
          </h1>
          <p className="mt-2 mb-5 md:mb-10 text-center">
            Already have an account ?
            <Link className="text-blue-500" to="/login">
              {" "}
              Login now
            </Link>
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitForm)}
              className="space-y-4 md:space-y-8"
            >
              <div className="flex gap-4 flex-col md:flex-row">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Full name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNo"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Phone no</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone no" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-4 flex-col md:flex-row">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Your email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="workStatus"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Select your status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="student">
                            I am a student
                          </SelectItem>
                          <SelectItem value="employee">
                            I am an employee
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-4 flex-col md:flex-row">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Confirm password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Confirm password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button disabled={isLoading} className="w-full" type="submit">
                Register Now
              </Button>

              <FormDescription>
                Are you a new company ?
                <Link className="text-blue-500" to="/recruit/register">
                  {" "}
                  Register now
                </Link>
              </FormDescription>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
