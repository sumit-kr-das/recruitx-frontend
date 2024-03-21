import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { TApiError } from "../../../../@types/TApiError";
import userEducationSchema from "../../../../@types/zod/UserEducationnSchema";
import { qualificationData } from "../../../../constants/qualificationData";
import { useSetUserEduMutation } from "../../../../features/user/post/setUserEduApiSlice";
import { Button } from "../../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
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
import { useToast } from "../../../../ui/use-toast";
import { EduFormData } from "./UpateUserEducation";

const INITIAL_EDUCATION = {
  degree: "",
  college: "",
  course: "",
  courseType: "",
  admissionYear: "",
  passYear: "",
  marks: "",
};

type TAddUserEducationProps = {
  isOpen: boolean;
  setIsOpen: (item: boolean) => void;
};

const AddUserEducation = ({ isOpen, setIsOpen }: TAddUserEducationProps) => {
  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);
  const [setUserEdu] = useSetUserEduMutation();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof userEducationSchema>>({
    resolver: zodResolver(userEducationSchema),
    defaultValues: INITIAL_EDUCATION
  });

  useEffect(() => {
    if (form.formState.isDirty) {
      setIsFormDirty(true);
    }
  }, [form.formState.isDirty]);

  const submitForm: SubmitHandler<EduFormData> = async (val) => {
    try {
      await setUserEdu(val).unwrap();
      toast({
        description: "Education added successfully",
      });
      setIsFormDirty(false);
      setIsOpen(false);
      form.reset(INITIAL_EDUCATION);
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError.data.message,
      });
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              name="degree"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Education</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {qualificationData.map((item, index) => (
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
            <FormField
              control={form.control}
              name="college"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel> University/Institute name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter college or university name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Course name</FormLabel>
                  <FormControl>
                    <Input placeholder="B.Tech/MCA/MBA/B.Sc etc" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="courseType"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Course type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Course type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Full time">Full time</SelectItem>
                      <SelectItem value="Part time">Part time</SelectItem>
                      <SelectItem value="Correspondence/Distance learning">
                        Correspondence/Distance learning
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="admissionYear"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Starting year</FormLabel>
                    <FormControl>
                      <Input placeholder="2023" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="passYear"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Passing year</FormLabel>
                    <FormControl>
                      <Input placeholder="2026" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="marks"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Total marks in percentage</FormLabel>
                  <FormControl>
                    <Input placeholder="70" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="float-right"
              disabled={!isFormDirty}
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

export default AddUserEducation;
