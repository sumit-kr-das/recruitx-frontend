import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
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

const Register = () => {
  const [userRegister, { isLoading }] = useUserRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof UserRegisterSchema>>({
    resolver: zodResolver(UserRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      password: "",
    },
  });

  // const submitForm: SubmitHandler<FormValues> = async (value) => {
  //   try {
  //     console.log(value);
  //     const userData = await userRegister(value).unwrap();
  //     dispatch(setCredentials(userData));
  //     toast.success("Register successfull");
  //     navigate("/mnjuser/home");
  //   } catch (err) {
  //     const apiError = err as TApiError;
  //     toast.error(apiError?.data.message);
  //   }
  // };

  function onSubmit() {}
  return (
    <>
      <TopHeader />
      <div className="pt-40 w-full h-screen flex justify-center">
        <div className="w-[800px]">
          <h1 className="text-4xl mb-10 font-extrabold text-center">
            Login Your <br /> RecruitX Account
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
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
                  <FormItem>
                    <FormLabel>Phone no</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone no" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
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
                  <FormItem>
                    <FormLabel>Select your status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select ststus" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="student">I am a student</SelectItem>
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

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
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

              <Button className="w-full" type="submit">
                Login Now
              </Button>

              <FormDescription>
                Already have an account ?<Link to="/login"> Login now</Link>.
              </FormDescription>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
