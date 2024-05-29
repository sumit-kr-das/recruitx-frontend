import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../ui/dialog";
import { Pencil } from "lucide-react";
import { useToast } from "../../../../ui/use-toast";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import OtherInfoSchema from "../../../../@types/zod/OtherInfoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../../../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../ui/form";
import { Input } from "../../../../ui/input";
import { Textarea } from "../../../../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../ui/select";
import SelectInput from "../../../form/multiSelectInput/SelectInput";
import { qualificationData } from "../../../../constants/qualificationData";
import { FormValue } from "../../../../pages/mnjuser/_components/OtherInfo";
import { useUpdateUserInfoMutation } from "../../../../features/user/put/updateUserInfoDataApiSlice";
import { tagsData } from "../../../../constants/tagsData";
import { languageData } from "../../../../constants/languageData";
import { TSetUserInfoProps } from "./ViewInfo";
import Loader from "../../../loader/Loader";

const UpdateUserInfo = ({ data }: TSetUserInfoProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState([...data[0]?.skills || tagsData[0]]);
  const [language, setLanguage] = useState([...data[0]?.language || languageData[0]])
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof OtherInfoSchema>>({
    resolver: zodResolver(OtherInfoSchema),
    defaultValues: {
      github: data[0]?.github || "",
      linkedIn: data[0]?.linkedIn || "",
      dateOfBirth: data[0]?.dateOfBirth || "",
      age: data[0]?.age?.toString() || "",
      address: data[0]?.address || "",
      bio: data[0]?.bio || "",
      objective: data[0]?.objective || "",
      language: data[0]?.language || "",
      gender: data[0]?.gender || "",
      skills: data[0]?.skills || "",
      maxQualification: data[0]?.maxQualification || "",
    },
  });


  const submitForm: SubmitHandler<FormValue> = async (value) => {
    try {
      await updateUserInfo(value).unwrap();
      toast({
        description: "User information update success",
      });
      setIsOpen(false);
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Something went wrong",
      });
    }
  };

  if (!data) return <Loader />;

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
      <DialogContent className="sm:max-w-[50%] rounded scrollbar-hide overflow-y-scroll max-h-full">
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
              name="objective"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Sort headline</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full stack software engineer with +5 yers of experience"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Description about you</FormLabel>
                  <FormControl>
                    <Textarea placeholder="About yourself" {...field} />
                  </FormControl>
                  <FormDescription>
                    Brief description about yourself
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Full address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Kolkata salt lake sector 5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Select your gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="femate">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="language"
                  render={() => (
                    <FormItem className="mt-3">
                      <FormLabel>Select language</FormLabel>
                      <FormControl>
                        <Controller
                          name="language"
                          control={form.control}
                          defaultValue={[]}
                          render={({ field }) => (
                            <SelectInput
                              multiple
                              options={languageData}
                              value={language}
                              onChange={(selectedOptions) => {
                                setLanguage(selectedOptions)
                                field.onChange(selectedOptions);
                              }}
                            />
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Your age</FormLabel>
                    <FormControl>
                      <Input placeholder="23" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Date of birth</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="github"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Github username</FormLabel>
                    <FormControl>
                      <Input placeholder="sumit-kr-das" {...field} />
                    </FormControl>
                    <FormDescription>github.com/sumit-kr-das</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedIn"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>LinkedIn username</FormLabel>
                    <FormControl>
                      <Input placeholder="sumit-kumar-das-01" {...field} />
                    </FormControl>
                    <FormDescription>
                      www.linkedin.com/in/sumit-kumar-das-01/
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="maxQualification"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Highest qualification</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Heighest qualification" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {qualificationData?.map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="skills"
                  render={() => (
                    <FormItem className="mt-3">
                      <FormLabel>Select Tags</FormLabel>
                      <FormControl>
                        <Controller
                          name="skills"
                          control={form.control}
                          defaultValue={[]}
                          render={({ field }) => (
                            <SelectInput
                              multiple
                              options={tagsData}
                              value={value}
                              onChange={(selectedOptions) => {
                                setValue(selectedOptions);
                                field.onChange(selectedOptions);
                              }}
                            />
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button
              className="float-right"
              disabled={!form.formState.isDirty}
              type="submit"
            >
              Save
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUserInfo;
