import { useState } from 'react'
import { Input } from '../../../ui/input'
import { Button } from '../../../ui/button'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '../../../ui/tabs'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../ui/form";
import { Textarea } from "../../../ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";
import { Controller, useForm } from 'react-hook-form'
import JobPostSchema from '../../../@types/zod/JobPostSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod";
import SelectInput from '../../form/multiSelectInput/SelectInput'
import { tagsData } from '../../../constants/tagsData'
import { industryTypes } from '../../../constants/industryTypes'
import { skillData } from '../../../constants/skillData'
import { useToast } from '../../../ui/use-toast'
import { qualificationData } from '../../../constants/qualificationData'
import { jobTypes } from '../../../constants/jobTypes'
import { workPlaceTypes } from '../../../constants/workplaceTypes'
import { jobRoles } from '../../../constants/jobRoles'
import { useUpdateJobMutation } from '../../../features/company/put/updateJobApiSlice';
import { DialogClose } from '../../../ui/dialog';
import { TApiError } from '../../../@types/TApiError';
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover';
import { cn } from '../../../lib/utils.ts';
import { citiesArray } from '../../../constants/citiesArray.ts';
import { ArrowUpDown, CheckIcon } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../../../ui/command';
import Tiptap from '../../Editor/Tiptap.tsx';
type FormValues = {
    title: string,
    category: string,
    shortDescription: string,
    description: string,
    tags: string[],
    vacancies: string,
    jobType: string
    workplaceType: string,
    startDate: string,
    endDate: string,
    roles: string,
    skills: string[],
    minExprience: string,
    maxExprience: string,
    minSalary: string,
    maxSalary: string,
    location: string,
    maxQualification: string,
    degree: string
}
interface job {
    _id: string,
    title: string,
    category: string,
    shortDescription: string,
    description: string,
    tags: [string],
    active: boolean,
    comapanyId: {
        _id: string,
        companyName: string,
        companyProfileId: {
            _id: string,
            logo: string
        }
    },
    info: {
        vacancies: number,
        jobType: string,
        workplaceType: string,
        startDate: string,
        endDate: string,
        roles: string,
        skills: [string],
        minExprience: number,
        maxExprience: number,
        minSalary: number,
        maxSalary: number,
        location: string,
        maxQualification: string,
        degree: string
    },
}

const EditJobForm = ({ job, setOpen }: { job: job, setOpen: Function }) => {

    const [value, setValue] = useState([...job?.tags || tagsData[0]]);
    const [skills, setSkills] = useState([...job?.info?.skills || skillData[0]])
    const { toast } = useToast();
    const [updateJob] = useUpdateJobMutation();


    const getDate = (srcDate: string) => {
        const originalDate = new Date(srcDate);
        const day = originalDate.getDate().toString().padStart(2, '0');
        const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
        const year = originalDate.getFullYear();
        return `${year}-${month}-${day}`
    };

    const form = useForm<z.infer<typeof JobPostSchema>>({
        resolver: zodResolver(JobPostSchema),
        defaultValues: {
            title: job?.title || "",
            category: job?.category || "",
            shortDescription: job?.shortDescription || "",
            description: job?.description || "",
            tags: job?.tags || [],
            vacancies: job?.info?.vacancies.toString() || '',
            jobType: job?.info?.jobType || "",
            workplaceType: job?.info?.workplaceType || "",
            startDate: getDate(job?.info?.startDate) || "",
            endDate: getDate(job?.info?.endDate) || "",
            roles: job?.info?.roles || "",
            skills: job?.info?.skills || [],
            minExprience: job?.info?.minExprience.toString() || '',
            maxExprience: job?.info?.maxExprience.toString() || '',
            minSalary: job?.info?.minSalary.toString() || '0',
            maxSalary: job?.info?.maxSalary.toString() || '',
            location: job?.info?.location || "",
            maxQualification: job?.info?.maxQualification || "",
            degree: job?.info?.degree || ""
        },
        mode: "onSubmit"
    });

    const updateJobData = async (data: FormValues) => {
        const convertedData = {
            ...data,
            vacancies: parseInt(data.vacancies.toString(), 10),
            minExprience: parseInt(data.minExprience.toString(), 10),
            maxExprience: parseInt(data.maxExprience.toString(), 10),
            minSalary: parseInt(data.minSalary.toString(), 10),
            maxSalary: parseInt(data.maxSalary.toString(), 10),
        };
        const { title, category, shortDescription, description, tags, ...other } = convertedData;
        const credentials = {
            title,
            category,
            shortDescription,
            description,
            tags,
            info: { ...other },
        };
        try {
            await updateJob({ id: job?._id, credentials }).unwrap();
            toast({
                description: "Job updated",
            });
            setOpen(false);
        } catch (err) {
            const apiError = err as TApiError;
            toast({
                variant: "destructive",
                description: apiError.data.message
            })
            setOpen(false);

        }
    };


    return (
        <>
            <div className='w-full'>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Basic Information</TabsTrigger>
                        <TabsTrigger value="password">Technical Information</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className='h-auto'>
                        <Form {...form}>
                            <form className="" onSubmit={form.handleSubmit(updateJobData)} >
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
                                                <Textarea rows={5} placeholder="Enter Meta Description" {...field} />
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
                                                <Tiptap description={field.value} onChange={field.onChange} />
                                            </FormControl>
                                            <FormMessage />
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
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select Industry Type"
                                                        />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            {industryTypes.map((item, index) => (
                                                                <SelectItem value={item} key={index}>{item}</SelectItem>
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
                                                                field.onChange(selectedOptions);
                                                            }}
                                                        />
                                                    )}
                                                />
                                            </FormControl>

                                        </FormItem>
                                    )}
                                />
                                <DialogClose asChild>
                                    <Button disabled={!form.formState.isDirty} className='float-right mt-5' type='submit'>Update</Button>
                                </DialogClose>

                            </form>
                        </Form>
                    </TabsContent>
                    <TabsContent value="password">
                        <Form {...form}>
                            <form className="" onSubmit={form.handleSubmit(updateJobData)} >
                                <div className='sm:flex sm:gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="roles"
                                        render={({ field }) => (
                                            <FormItem className="mt-3 sm:flex-1">
                                                <FormLabel>Select Role</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select Industry Type"
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                {jobRoles.map((item, index) => (
                                                                    <SelectItem value={item} key={index}>{item}</SelectItem>
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
                                        name="minExprience"
                                        render={({ field }) => (
                                            <FormItem className="mt-3 sm:flex-1">
                                                <FormLabel>Minimum Exprience</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter miminum exprience" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='sm:flex sm:gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="maxExprience"
                                        render={({ field }) => (
                                            <FormItem className="sm:flex-1 mt-3">
                                                <FormLabel>Maximum Exprience</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter maximum exprience" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="workplaceType"
                                        render={({ field }) => (
                                            <FormItem className="mt-3 sm:flex-1">
                                                <FormLabel>Select Role</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select workspace type"
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                {workPlaceTypes.map((item, index) => (
                                                                    <SelectItem value={item} key={index}>{item}</SelectItem>
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
                                <div className='sm:flex sm:gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="jobType"
                                        render={({ field }) => (
                                            <FormItem className="mt-3 sm:flex-1">
                                                <FormLabel>Select Role</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select job type"
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                {jobTypes.map((item, index) => (
                                                                    <SelectItem value={item} key={index}>{item}</SelectItem>
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
                                                        <PopoverContent className="w-full p-0">
                                                            <Command>
                                                                <CommandInput
                                                                    placeholder="Search framework..."
                                                                    className="h-9"
                                                                />
                                                                <CommandEmpty>No framework found.</CommandEmpty>
                                                                <CommandGroup>
                                                                    {citiesArray.map((city) => (
                                                                        <CommandItem
                                                                            value={city.label}
                                                                            key={city.value}
                                                                            onSelect={() => {
                                                                                form.setValue("location", city.value)
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
                                <div className='sm:flex sm:gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="vacancies"
                                        render={({ field }) => (
                                            <FormItem className="sm:flex-1 mt-3">
                                                <FormLabel>Enter No of Vacancies</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter No of Vacancies" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="minSalary"
                                        render={({ field }) => (
                                            <FormItem className="sm:flex-1 mt-3">
                                                <FormLabel>Minimum Salary</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Minimum Salary" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='sm:flex sm:gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="maxSalary"
                                        render={({ field }) => (
                                            <FormItem className="sm:flex-1 mt-3">
                                                <FormLabel>Maximum Salary</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Maximum Salary" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="maxQualification"
                                        render={({ field }) => (
                                            <FormItem className="sm:mt-3 flex-1">
                                                <FormLabel>Select max qualification</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select max qualification"
                                                            />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                {qualificationData.map((item, index) => (
                                                                    <SelectItem value={item} key={index}>{item}</SelectItem>
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
                                <div className='sm:flex sm:gap-4'>
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
                                        name="startDate"
                                        render={({ field }) => (
                                            <FormItem className="sm:flex-1 mt-3">
                                                <FormLabel>Start Date</FormLabel>
                                                <FormControl>
                                                    <Input type="date"   {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='sm:flex sm:gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="endDate"
                                        render={({ field }) => (
                                            <FormItem className="sm:flex-1 mt-3">
                                                <FormLabel>End Date</FormLabel>
                                                <FormControl>
                                                    <Input type="date"  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="skills"
                                        render={() => (
                                            <FormItem className="mt-3 sm:flex-1">
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
                                <Button disabled={!form.formState.isDirty} type='submit' className='float-right mt-5'>Update</Button>
                            </form>
                        </Form>
                    </TabsContent>

                </Tabs>
            </div>

        </>
    )
}

export default EditJobForm