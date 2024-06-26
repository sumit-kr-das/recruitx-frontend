import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import JobPostSchema from "../../@types/zod/JobPostSchema";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { industryTypes } from "../../constants/industryTypes";
import SelectInput from "../../components/form/multiSelectInput/SelectInput";
import { tagsData } from "../../constants/tagsData";
import { jobRoles } from "../../constants/jobRoles";
import { workPlaceTypes } from "../../constants/workplaceTypes";
import { jobTypes } from "../../constants/jobTypes";
import { qualificationData } from "../../constants/qualificationData";
import { skillData } from "../../constants/skillData";
import { Button } from "../../ui/button";
import { usePostJobMutation } from "../../features/company/post/setJobApiSlice";
import { useToast } from "../../ui/use-toast";
import { TApiError } from "../../@types/TApiError";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { cn } from "../../lib/utils.ts";
import { citiesArray } from "../../constants/citiesArray.ts";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../ui/command";
import { ArrowUpDown, CheckIcon } from "lucide-react";
import Tiptap from "../../components/Editor/Tiptap.tsx";
import { Textarea } from "../../ui/textarea.tsx";
type FormValues = {
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  tags: string[];
  vacancies: string;
  jobType: string;
  workplaceType: string;
  startDate: string;
  endDate: string;
  roles: string;
  skills: string[];
  minExprience: string;
  maxExprience: string;
  minSalary: string;
  maxSalary: string;
  location: string;
  maxQualification: string;
  degree: string;
};
const SubmitJob = () => {
  const [submitJob] = usePostJobMutation();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [value, setValue] = useState([tagsData[0]]);
  const [skills, setSkills] = useState([skillData[0]]);
  const { toast } = useToast();

  const steps = [
    {
      id: "Step 1",
      name: "Basic Information",
      fields: ["title", "category", "description", "tags"],
    },
    {
      id: "Step 2",
      name: "Technical Infomation",
    },
  ];

  const form = useForm<z.infer<typeof JobPostSchema>>({
    resolver: zodResolver(JobPostSchema),
    defaultValues: {
      title: "",
      category: "",
      shortDescription: "",
      description: "",
      tags: [],
      vacancies: "",
      jobType: "",
      workplaceType: "",
      startDate: "",
      endDate: "",
      roles: "",
      skills: [],
      minExprience: "",
      maxExprience: "",
      minSalary: "0",
      maxSalary: "",
      location: "",
      maxQualification: "",
      degree: "",
    },
    mode: "onSubmit",
  });
  type FieldName = keyof z.infer<typeof JobPostSchema>;

  const next = async () => {
    const fields = steps[0].fields;

    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;
    setStep(1);
  };

  const postJob = async (data: FormValues) => {
    const convertedData = {
      ...data,
      vacancies: parseInt(data.vacancies.toString(), 10),
      minExprience: parseInt(data.minExprience.toString(), 10),
      maxExprience: parseInt(data.maxExprience.toString(), 10),
      minSalary: parseInt(data.minSalary.toString(), 10),
      maxSalary: parseInt(data.maxSalary.toString(), 10),
    };
    const { title, category, shortDescription, description, tags, ...other } =
      convertedData;
    const newJobData = {
      title,
      category,
      shortDescription,
      description,
      tags,
      info: { ...other },
    };

    try {
      await submitJob(newJobData).unwrap();
      toast({
        description: "Job Submitted Successfully",
      });
      navigate("/dashboard/my_jobs");
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError?.data?.message,
      });
    }
  };
  return (
    <Container>
      <TitleBar title="Post Jobs" path="Employer / Dashboard / Post Jobs" />
      <section className="w-full">
        <div className="w-full h-auto m-auto">
          <div className="h-fit rounded-lg bg-white p-5 sm:p-10 mb-10 shadow md:w-full m-auto">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              {steps[step]?.name}
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Increase the quality of your hire
            </p>
            <Form {...form}>
              <form className="" onSubmit={form.handleSubmit(postJob)}>
                {step === 0 && (
                  <>
                    <div className="flex flex-col">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="shortDescription"
                        render={({ field }) => (
                          <FormItem className="flex-1 mt-3">
                            <FormLabel>Job Short Description</FormLabel>
                            <FormControl>
                              <Textarea
                                rows={5}
                                placeholder="Enter Meta Description"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem className="flex-1 mt-3">
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                              {/* <Textarea rows={8} placeholder="Enter Description" {...field} /> */}
                              <Tiptap
                                description={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            {/* <FormMessage>{errors.description?.message}</FormMessage> */}
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem className="mt-3">
                            <FormLabel>Job Category</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select Industry Type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {industryTypes.map((item, index) => (
                                      <SelectItem value={item} key={index}>
                                        {item}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                                <FormMessage />
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="tags"
                        render={() => (
                          <FormItem className="mt-3">
                            <FormLabel>Select Tags</FormLabel>
                            <FormControl>
                              <Controller
                                name="tags"
                                control={form.control}
                                defaultValue={[]}
                                render={({ field }) => (
                                  <SelectInput
                                    multiple
                                    options={tagsData}
                                    value={value}
                                    onChange={(selectedOptions) => {
                                      setValue(selectedOptions);
                                      // Update the RHF form value and trigger validation
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
                  </>
                )}
                {step === 1 && (
                  <>
                    <div className="sm:flex sm:gap-4">
                      <FormField
                        control={form.control}
                        name="roles"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Select Role</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select Industry Type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {jobRoles.map((item, index) => (
                                      <SelectItem value={item} key={index}>
                                        {item}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                                <FormMessage />
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="workplaceType"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Select WorkplaceType</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select workplace type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {workPlaceTypes.map((item, index) => (
                                      <SelectItem value={item} key={index}>
                                        {item}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                                <FormMessage />
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="sm:flex sm:gap-4">
                      <FormField
                        control={form.control}
                        name="minExprience"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Minimum Exprience</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter miminum exprience"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="maxExprience"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 flex-1 mt-3">
                            <FormLabel>Maximum Exprience</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter maximum exprience"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="sm:flex sm:gap-4">
                      <FormField
                        control={form.control}
                        name="jobType"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Select Job Type</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select job type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {jobTypes.map((item, index) => (
                                      <SelectItem value={item} key={index}>
                                        {item}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                                <FormMessage />
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <div className="sm:flex-1 mt-3">
                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Location</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant="outline"
                                      role="combobox"
                                      className={cn(
                                        "w-full justify-between",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value
                                        ? citiesArray.find(
                                            (city) => city.value === field.value
                                          )?.label
                                        : "Select location"}
                                      <ArrowUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                  <Command>
                                    <CommandInput
                                      placeholder="Search framework..."
                                      className="h-9"
                                    />
                                    <CommandEmpty>
                                      No framework found.
                                    </CommandEmpty>
                                    <CommandGroup>
                                      {citiesArray.map((city) => (
                                        <CommandItem
                                          value={city.label}
                                          key={city.value}
                                          onSelect={() => {
                                            form.setValue(
                                              "location",
                                              city.value
                                            );
                                          }}
                                        >
                                          {city.label}
                                          <CheckIcon
                                            className={cn(
                                              "ml-auto h-4 w-4",
                                              city.value === field.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="sm:flex sm:gap-4">
                      <FormField
                        control={form.control}
                        name="vacancies"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Enter No of Vacancies</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter No of Vacancies"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="maxQualification"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Select max qualification</FormLabel>
                            <FormControl>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select max qualification" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    {qualificationData.map((item, index) => (
                                      <SelectItem value={item} key={index}>
                                        {item}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                                <FormMessage />
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="sm:flex sm:gap-4">
                      <FormField
                        control={form.control}
                        name="minSalary"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Minimum Salary</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Minimum Salary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="maxSalary"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Maximum Salary</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter Maximum Salary"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="sm:gap-4 sm:flex">
                      <FormField
                        control={form.control}
                        name="degree"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Enter Degree Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Degree" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="skills"
                        render={() => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Select Tags</FormLabel>
                            <FormControl>
                              <Controller
                                name="skills"
                                control={form.control}
                                defaultValue={[]}
                                render={({ field }) => (
                                  <SelectInput
                                    multiple
                                    options={skillData}
                                    value={skills}
                                    onChange={(selectedOptions) => {
                                      setSkills(selectedOptions);
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

                    <div className="sm:flex sm:gap-4">
                      <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>Start Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                          <FormItem className="sm:flex-1 mt-3">
                            <FormLabel>End Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </>
                )}

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  {step === 0 && (
                    <>
                      <Button onClick={next} type="button">
                        Next
                      </Button>
                    </>
                  )}
                  {step === 1 && (
                    <>
                      <Button onClick={() => setStep(0)}>Back</Button>
                      <Button type="submit">Finish</Button>
                    </>
                  )}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default SubmitJob;
