import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import BasicInfoSchema from "../../../../@types/zod/BasicInfoSchema";
import { useUpdateUserMutation } from "../../../../features/user/put/updateUserProfileApiSlice";
import { Button } from "../../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../ui/form";
import { Input } from "../../../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../ui/select";
import { BasicInfoFormData } from "./BasicInfo";
import { useEffect, useState } from "react";

type UserBasicInfoProps = {
  user: BasicInfoFormData;
};

const UpdateBasicInfo = ({ user }: UserBasicInfoProps) => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isFormDirty, setIsFormDirty] = useState(false); 
  const [updateUser] = useUpdateUserMutation();

  const form = useForm<z.infer<typeof BasicInfoSchema>>({
    resolver: zodResolver(BasicInfoSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phoneNo: user?.phoneNo || "",
      workStatus: user?.workStatus || "",
    },
  });

  useEffect(() => {
    if (form.formState.isDirty) {
      setIsFormDirty(true);
    }
  }, [form.formState.isDirty]);

  const submitForm: SubmitHandler<BasicInfoFormData> = async (value) => {
    try {
        await updateUser(value).unwrap();
        setIsOpen(false)
        setIsFormDirty(false);
      //   toast.success("Update successfull");
    } catch (err) {
      // const apiError = err as TApiError;
      // toast.error(apiError.data.message);
    }
  };

  console.log(form.formState.isDirty);
  

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          title="edit"
          className=" absolute top-4 right-4 bg-slate-200 p-4 rounded-full cursor-pointer"
        >
          <Pencil className="w-[15px] h-[15px]" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              name="phoneNo"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Your mobile no.</FormLabel>
                  <FormControl>
                    <Input placeholder="7074397412" {...field} />
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
                      <SelectItem value="student">I am a student</SelectItem>
                      <SelectItem value="employee">I am an employee</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={!isFormDirty} className="float-right" type="submit">
              Update info
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBasicInfo;
