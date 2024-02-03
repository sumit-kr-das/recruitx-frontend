import React, { useState } from 'react'
import { Input } from '../../../ui/input'
import { Button } from '../../../ui/button'
import { Label } from '../../../ui/label'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../../../ui/card'
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
type FormValues = {
    title: string,
    category: string,
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

const EditJobForm = () => {

    const [value, setValue] = useState([tagsData[0]]);
    const [skills, setSkills] = useState([skillData[0]])
    const { toast } = useToast();
    const form = useForm<z.infer<typeof JobPostSchema>>({
        resolver: zodResolver(JobPostSchema),
        defaultValues: {
            title: "",
            category: "",
            description: "",
            tags: [],
            vacancies: '',
            jobType: "",
            workplaceType: "",
            startDate: "",
            endDate: "",
            roles: "",
            skills: [],
            minExprience: '',
            maxExprience: '',
            minSalary: '0',
            maxSalary: '',
            location: "",
            maxQualification: "",
            degree: ""
        },
        mode: "onSubmit"
    });

    const updateJob = async (data: FormValues) => {
        console.log(data);
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
                        {/* <Card>
                            <CardHeader>
                                <CardTitle>Account</CardTitle>
                                <CardDescription>
                                    Make changes to your account here. Click save when you're done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="Pedro Duarte" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username" defaultValue="@peduarte" />
                                </div>
                            </CardContent>
                        </Card> */}
                        <Form {...form}>
                            <form className="" onSubmit={form.handleSubmit(updateJob)} >
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
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 mt-3">
                                            <FormLabel>Job Description</FormLabel>
                                            <FormControl>
                                                <Textarea rows={8} placeholder="Enter Description" {...field} />
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
                                    render={({ field }) => (
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
                                <Button className='float-right mt-5'>Update</Button>
                            </form>
                        </Form>
                    </TabsContent>
                    <TabsContent value="password">
                        <Form {...form}>
                            <form className="" onSubmit={form.handleSubmit(updateJob)} >
                                <div className='flex gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="roles"
                                        render={({ field }) => (
                                            <FormItem className="mt-3 flex-1">
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
                                            <FormItem className="mt-3 flex-1">
                                                <FormLabel>Minimum Exprience</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter miminum exprience" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className='flex gap-4'>
                                    <FormField
                                        control={form.control}
                                        name="maxExprience"
                                        render={({ field }) => (
                                            <FormItem className="flex-1 mt-3">
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
                                            <FormItem className="mt-3 flex-1">
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
                                <div className='flex flex-1'>

                                </div>
                                <FormField
                                    control={form.control}
                                    name="jobType"
                                    render={({ field }) => (
                                        <FormItem className="mt-3">
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

                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 mt-3">
                                            <FormLabel>Enter location</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter maximum exprience" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="vacancies"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 mt-3">
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
                                        <FormItem className="flex-1 mt-3">
                                            <FormLabel>Minimum Salary</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Minimum Salary" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="maxSalary"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 mt-3">
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
                                        <FormItem className="mt-3">
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

                                <FormField
                                    control={form.control}
                                    name="degree"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 mt-3">
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
                                        <FormItem className="flex-1 mt-3">
                                            <FormLabel>Start Date</FormLabel>
                                            <FormControl>
                                                <Input type="date"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="endDate"
                                    render={({ field }) => (
                                        <FormItem className="flex-1 mt-3">
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
                                    render={({ field }) => (
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
                                                            options={skillData}
                                                            value={skills}
                                                            onChange={(selectedOptions) => {
                                                                setSkills(selectedOptions);
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
                            </form>
                        </Form>
                    </TabsContent>
                    {/* <Button className='float-right mt-5'>Update</Button> */}

                </Tabs>
            </div>

        </>
    )
}

export default EditJobForm