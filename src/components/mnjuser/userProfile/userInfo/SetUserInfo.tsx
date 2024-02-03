import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import OtherInfoSchema from "../../../../@types/zod/OtherInfoSchema";
import { languageData } from "../../../../constants/languageData";
import { qualificationData } from "../../../../constants/qualificationData";
import { tagsData } from "../../../../constants/tagsData";
import { useSetUserMutation } from "../../../../features/user/post/setUserInfoDataApiSlice";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../ui/select";
import { Textarea } from "../../../../ui/textarea";
import { useToast } from "../../../../ui/use-toast";
import SelectInput from "../../../form/multiSelectInput/SelectInput";
import { FormValue, INITIAL_DATA } from "./OtherInfo";

type TSetUserInfoProps = {
  setUserData: (value: FormValue) => void;
  lang: string[];
  setLang: (value: string[]) => void;
  tags: string[];
  setTags: (value: string[]) => void;
};

const SetUserInfo = ({
  setUserData,
  lang,
  setLang,
  tags,
  setTags,
}: TSetUserInfoProps) => {
  const [setUser] = useSetUserMutation();
  const { toast } = useToast();

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
      language: [],
      gender: "",
      skills: [],
      maxQualification: "",
    },
  });

  const submitForm: SubmitHandler<FormValue> = async (value) => {
    try {
      await setUser(value).unwrap();
      toast({
        description: "User information update success",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        description: "Something went wrong",
      });
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
                            value={lang}
                            onChange={(selectedOptions) => {
                              setLang(selectedOptions);
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
              name="linkedIn"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Linkedin username</FormLabel>
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
              name="github"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Date of birth</FormLabel>
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
                            value={tags}
                            onChange={(selectedOptions) => {
                              setTags(selectedOptions);
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
