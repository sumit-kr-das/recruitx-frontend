import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import { useChangePassMutation } from "../../features/company/put/changePasswordApiSlice";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import ChangePasswordSchema from "../../@types/zod/ChangePasswordSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useToast } from "../../ui/use-toast";
import { Card } from "../../ui/card";
import ApproveAlert from "../../components/recruit/ApproveAlert";
import { useChangeAdminPassMutation } from "../../features/admin/put/ChangePasswordApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentRole } from "../../features/auth/authSlice";
import { TApiError } from "../../@types/TApiError";
type FormValue = {
  newPassword: string;
  oldPassword: string;
};
const ChangePassword = () => {
  const [changePass] = useChangePassMutation();
  const [changeAdminPass] = useChangeAdminPassMutation();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const role = useSelector(selectCurrentRole);

  const form = useForm<z.infer<typeof ChangePasswordSchema>>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      newPassword: "",
      oldPassword: "",
    },
    mode: "onSubmit",
  });

  const UpdatePassword = async (data: FormValue) => {
    try {
      if (role === "company") {
        await changePass(data).unwrap();
      } else if (role === "admin") {
        await changeAdminPass(data).unwrap();
      }
      toast({
        description: "Password update successfull",
      });
      dispatch(logout());
    } catch (error: any) {
      const apiError = error as TApiError;
      toast({
        variant: "destructive",
        description: apiError?.data?.message,
      });
    }
  };

  return (
    <Container>
      <ApproveAlert />
      <TitleBar
        title="Employer Update Password"
        path="Employer / Dashboard / Update Password"
      />
      <Card className="p-5 mt-5 w-full">
        <Form {...form}>
          <form className="" onSubmit={form.handleSubmit(UpdatePassword)}>
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
              type="submit"
              className="mt-4"
              disabled={!form.formState.isDirty}
            >
              Update
            </Button>
          </form>
        </Form>
      </Card>
    </Container>
  );
};

export default ChangePassword;
