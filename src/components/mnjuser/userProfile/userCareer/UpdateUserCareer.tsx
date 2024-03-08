import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../../../ui/dialog'
import { Pencil } from 'lucide-react';
import { CarrerFormValue } from './AddUserCareer';
import { TUserCareer } from '../../../../@types/user/TUserCareer';
import { Controller, useForm } from 'react-hook-form';
import UserCareerSchema from '../../../../@types/zod/UserCareerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../ui/select';
import { industryTypes } from '../../../../constants/industryTypes';
import { jobRoles } from '../../../../constants/jobRoles';
import { jobTypes } from '../../../../constants/jobTypes';
import { workPlaceTypes } from '../../../../constants/workplaceTypes';
import SelectInput from '../../../form/multiSelectInput/SelectInput';
import { skillData } from '../../../../constants/skillData';
import { Input } from '../../../../ui/input';
import { Button } from '../../../../ui/button';
import { useUpdateUserCareerMutation } from '../../../../features/user/put/updateUserCareerApiSlice';
import { useToast } from '../../../../ui/use-toast';
import { TApiError } from '../../../../@types/TApiError';

const UpdateUserCareer = ({ data }: { data: TUserCareer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState([...data?.skills] || [skillData[0]])
    const { toast } = useToast();
    const [updateUserCareer] = useUpdateUserCareerMutation();
    const form = useForm<z.infer<typeof UserCareerSchema>>({
        resolver: zodResolver(UserCareerSchema),
        defaultValues: {
            industry: data?.industry || "",
            role: data?.role || "",
            jobRole: data?.jobRole || "",
            jobType: data?.jobType || "",
            employmentType: data?.employmentType || "",
            skills: [...data?.skills || ""],
            expectedSalary: data?.expectedSalary?.toString() || "",
        }
    });

    const updateCareer = async (value: CarrerFormValue) => {
        const convertedData = {
            ...value,
            expectedSalary: parseInt(value?.expectedSalary)
        };
        const id = data?._id;
        console.log(convertedData);
        try {
            if (id) {
                await updateUserCareer({ id, val: convertedData }).unwrap();
                toast({
                    description: "Career updated successfully"
                });
                setIsOpen(false);
            }
        } catch (err) {
            const apiError = err as TApiError;
            toast({
                variant: "destructive",
                description: apiError.data.message,
            });
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div title='edit' className='absolute top-4 right-4 bg-slate-200 p-4 rounded-full cursor-pointer'>
                    <Pencil className='w-[15px] h-[15px]' />
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
                    <form onSubmit={form.handleSubmit(updateCareer)} className="space-y-8">
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
                        <Button disabled={!form.formState.isDirty}>Update</Button>
                    </form>
                </Form>
            </DialogContent>

        </Dialog>
    )
}

export default UpdateUserCareer