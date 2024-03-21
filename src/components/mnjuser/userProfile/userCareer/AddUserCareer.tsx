import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../../../../ui/button";
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
import SelectInput from "../../../form/multiSelectInput/SelectInput";
import UserCareerSchema from "../../../../@types/zod/UserCareerSchema";
import { industryTypes } from "../../../../constants/industryTypes";
import { jobRoles } from "../../../../constants/jobRoles";
import { jobTypes } from "../../../../constants/jobTypes";
import { workPlaceTypes } from "../../../../constants/workplaceTypes";
import { skillData } from "../../../../constants/skillData";
import { useState } from "react";
import { useSetUserCareerMutation } from "../../../../features/user/post/AddUserCareerApiSlice";
import { TApiError } from "../../../../@types/TApiError";

const INITIAL_CAREER = {
    industry: "",
    role: "",
    jobRole: "",
    jobType: "",
    employmentType: "",
    skills: [],
    expectedSalary: ""
}
export type CarrerFormValue = {
    industry: string,
    role: string,
    jobRole: string,
    jobType: string,
    employmentType: string,
    skills: string[],
    expectedSalary: string
}

const AddUserCareer = () => {
    const [value, setValue] = useState([skillData[0]]);
    const { toast } = useToast();
    const [setUserCareer, { isLoading }] = useSetUserCareerMutation();

    const form = useForm<z.infer<typeof UserCareerSchema>>({
        resolver: zodResolver(UserCareerSchema),
        defaultValues: INITIAL_CAREER
    });

    const submitForm: SubmitHandler<CarrerFormValue> = async (value) => {
        const convertedData = {
            ...value,
            expectedSalary: parseInt(value?.expectedSalary)
        };

        try {
            await setUserCareer(convertedData).unwrap();
            toast({
                description: "User career data submitted."
            })
            form.reset(INITIAL_CAREER)
        } catch (error) {
            const apiError = error as TApiError;
            toast({
                variant: "destructive",
                description: apiError.data.message
            })
        }

    }

    return (
        <div className="relative mt-4 bg-white p-10 rounded-lg border shadow">
            <div className="mb-5">
                <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                    Career Information
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Add your preferred career information
                </p>
            </div>
            <Form {...form}>
                <form className="space-y-8" onSubmit={form.handleSubmit(submitForm)}>
                    <div className="sm:flex sm:gap-4">
                        <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1">
                                    <FormLabel>Select Industry</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Industry" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {
                                                industryTypes.map((item) => (
                                                    <SelectItem value={item} key={item}>{item}</SelectItem>

                                                ))
                                            }

                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1">
                                    <FormLabel>Select Role</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select role" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {
                                                jobRoles.map((item) => (
                                                    <SelectItem value={item} key={item}>{item}</SelectItem>

                                                ))
                                            }

                                        </SelectContent>
                                    </Select>
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
                                <FormItem className="sm:flex-1 mt-1">
                                    <FormLabel>Select Job Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Job Type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {
                                                jobTypes.map((item) => (
                                                    <SelectItem value={item} key={item}>{item}</SelectItem>

                                                ))
                                            }

                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="employmentType"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-1">
                                    <FormLabel>Select employement Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Employement" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {
                                                workPlaceTypes.map((item) => (
                                                    <SelectItem value={item} key={item}>{item}</SelectItem>

                                                ))
                                            }

                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="sm:flex sm:gap-4">
                        <FormField
                            control={form.control}
                            name="jobRole"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-1">
                                    <FormLabel>Select JobRole</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Job Role" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {
                                                jobRoles.map((item) => (
                                                    <SelectItem value={item} key={item}>{item}</SelectItem>
                                                ))
                                            }

                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="skills"
                            render={() => (
                                <FormItem className="mt-1 sm:flex-1">
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
                    <div className="sm:flex gap-4">
                        <FormField
                            control={form.control}
                            name="expectedSalary"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Expected Salary</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="3,00,000"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button disabled={isLoading}>Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default AddUserCareer