import { Dialog, DialogDescription, DialogContent, DialogHeader, DialogTitle } from '../../../../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../ui/form';
import { Controller, useForm } from 'react-hook-form';
import UserExpSchema from '../../../../@types/zod/UserExp';
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../ui/select';
import { Input } from '../../../../ui/input';
import { jobTypes } from '../../../../constants/jobTypes';
import SelectInput from '../../../form/multiSelectInput/SelectInput';
import { skillData } from '../../../../constants/skillData';
import { useState } from 'react';
import { Button } from '../../../../ui/button';
import { useAddUserExpMutation } from '../../../../features/user/post/AddUserExpApiSlice';
import { useToast } from '../../../../ui/use-toast';
import { TApiError } from '../../../../@types/TApiError';
type TAddUserEducationProps = {
    isOpen: boolean;
    setIsOpen: (item: boolean) => void;
};

export type ExpFormValue = {
    companyName: string,
    designation: string,
    experience: string,
    type: string,
    startDate: string,
    endDate: string,
    jobProfile: string,
    skills: string[]
}
const AddUserExp = ({ isOpen, setIsOpen }: TAddUserEducationProps) => {
    const [skill, setSkill] = useState([skillData[0]]);
    const [AddUserExp] = useAddUserExpMutation();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof UserExpSchema>>({
        resolver: zodResolver(UserExpSchema),
        defaultValues: {
            companyName: "",
            designation: "",
            experience: "",
            type: "",
            startDate: "",
            endDate: "",
            jobProfile: "",
            skills: []
        },
    });

    const submitUserExp = async (values: ExpFormValue) => {
        try {
            await AddUserExp(values).unwrap();
            toast({
                description: "Your experience added successfully"
            });
            setIsOpen(false);
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
            <DialogContent className="sm:max-w-[50%] rounded scrollbar-hide overflow-y-scroll max-h-full">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitUserExp)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Company name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter company name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="designation"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Company Designation</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter designation"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="experience"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Company experience</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter experience"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select job type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {jobTypes.map((item, index) => (
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
                            name="startDate"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Company experience</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='date'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="endDate"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Company End Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='date'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="jobProfile"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel>Enter Job Profile</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='Enter Job Profile'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="skills"
                            render={() => (
                                <FormItem className="mt-3">
                                    <FormLabel>Select language</FormLabel>
                                    <FormControl>
                                        <Controller
                                            name="skills"
                                            control={form.control}
                                            defaultValue={[]}
                                            render={({ field }) => (
                                                <SelectInput
                                                    multiple
                                                    options={skillData}
                                                    value={skill}
                                                    onChange={(selectedOptions) => {
                                                        setSkill(selectedOptions);
                                                        field.onChange(selectedOptions);
                                                    }}
                                                />
                                            )}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type='submit' className='float-right'>Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>

    )
}

export default AddUserExp