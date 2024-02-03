import { toast } from "react-hot-toast";
import { languageData } from "../../../../constants/languageData";
import { qualificationData } from "../../../../constants/qualificationData";
import { useSetUserMutation } from "../../../../features/user/post/setUserInfoDataApiSlice";
import SelectInput from "../../../form/multiSelectInput/SelectInput";
import { INITIAL_DATA } from "./OtherInfo";
import { tagsData } from "../../../../constants/tagsData";
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
import { SubmitHandler, useForm } from "react-hook-form";
import OtherInfoSchema from "../../../../@types/zod/OtherInfoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../../../../ui/button";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../ui/select";
import { Textarea } from "../../../../ui/textarea";

 type FormValue = {
  github: string,
  linkedIn: string,
  dateOfBirth: string,
  age: string,
  address: string,
  bio: string,
  objective: string,
  language: string[],
  gender: string,
  skills: string[],
  maxQualification: string,
};

const SetUserInfo = ({
  userData,
  setUserData,
  lang,
  setLang,
  tags,
  setTags,
}) => {
  const [setUser] = useSetUserMutation();

  const form = useForm<z.infer<typeof OtherInfoSchema>>({
    resolver: zodResolver(OtherInfoSchema),
    defaultValues: {
      github: "",
      linkedIn: "",
      dateOfBirth: "",
      age: "",
      address: "",
      bio: "",
      objective: "",
      language: [""],
      gender: "",
      skills: [""],
      maxQualification: "",
    },
  });

  const submitForm:SubmitHandler<FormValue> = async (value) => {
    toast.success("Entered");
    // e.preventDefault();
    try {
      await setUser(value).unwrap();
    } catch (err) {
      toast.success(err?.data?.msg);
      console.log("Error on company login", err);
    }
  };

  const handleCancel = () => {
    setUserData(INITIAL_DATA);
  };

  return (
    <div className="relative mt-4 bg-white p-10 rounded-lg border shadow">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold leading-7 text-gray-900">
          Basic information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Increase the quality of your hire
        </p>
      </div>
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
                <FormDescription>Brief description about yourself</FormDescription>
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
                  <Input placeholder="Kolkata salt lake sector 5" {...field} />
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
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select language
              </label>
              <div className="mt-2 w-full">
                <SelectInput
                  multiple
                  options={languageData}
                  value={lang}
                  onChange={(o) => {
                    setLang(o);
                    setUserData({ ...userData, language: lang });
                  }}
                />
              </div>
              <FormDescription>Select atlist 2 language</FormDescription>
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
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select your skills
              </label>
              <div className="mt-2 w-full">
                <SelectInput
                  multiple
                  options={tagsData}
                  value={tags}
                  onChange={(o) => {
                    setTags(o);
                    setUserData({ ...userData, skills: tags });
                  }}
                />
              </div>
              <FormDescription>Select atlist 5 skills</FormDescription>
            </div>
          </div>
          <div className="flex gap-5">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SetUserInfo;
