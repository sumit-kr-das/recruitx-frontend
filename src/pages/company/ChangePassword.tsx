import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import { useChangePassMutation } from "../../features/company/put/changePasswordApiSlice";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import ChangePasswordSchema from "../../@types/zod/ChangePasswordSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useToast } from "../../ui/use-toast";

type FormValue = {
  newPassword: string,
  oldPassword: string
}
const ChangePassword = () => {
  const [changePass] = useChangePassMutation();
  const dispatch = useDispatch();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      newPassword: "",
      oldPassword: ""
    },
    mode: "onSubmit"
  });

  const UpdatePassword = async (data: FormValue) => {
    console.log(data)
    try {
      await changePass(data).unwrap();
      toast({
        description: "Password update successfull"
      })
      dispatch(logout());
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error.message
      })
    }
  }

  return (
    <Container>
      <TitleBar
        title="Employer Update Password"
        path="Employer / Dashboard / Update Password"
      />
      <div className="bg-white p-10 rounded-lg mt-5 sm:w-[450px] sm:m-auto">
        <Form {...form}>
          <form className="" onSubmit={form.handleSubmit(UpdatePassword)} >
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter New Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="oldPassword"
              render={({ field }) => (
                <FormItem className="mt-3">
                  <FormLabel>Old Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Old Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit" className="mt-4"
            >
              Update
            </Button>
          </form>
        </Form>
      </div>
    </Container>
  );
};

export default ChangePassword;
