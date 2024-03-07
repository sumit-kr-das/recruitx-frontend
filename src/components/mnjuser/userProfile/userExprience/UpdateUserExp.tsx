import { TUserExp } from '../../../../@types/user/TUserExp'
import UserExpSchema from '../../../../@types/zod/UserExp'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../../../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../ui/form'
import { Button } from '../../../../ui/button'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { Input } from '../../../../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../../ui/select'
import { jobTypes } from '../../../../constants/jobTypes'
import SelectInput from '../../../form/multiSelectInput/SelectInput'
import { skillData } from '../../../../constants/skillData'
import { useState } from 'react'
import Loader from '../../../loader/Loader'
import { useUpdateUserExpMutation } from '../../../../features/user/put/updateUserExpApiSlice'
import { ExpFormValue } from './AddUserExp'
import { useToast } from '../../../../ui/use-toast'
import { TApiError } from '../../../../@types/TApiError'

type TProps = {
    data: TUserExp,
    openDialog: boolean,
    setOpenDialog: (value: boolean) => void;

}

const UpdateUserExp = ({ data, openDialog, setOpenDialog }: TProps) => {
    const [skill, setSkill] = useState([...data?.skills || skillData[0]]);
    const [updateUserExp] = useUpdateUserExpMutation();
    const { toast } = useToast();

    const getDate = (srcDate: string) => {
        const originalDate = new Date(srcDate);
        const day = originalDate.getDate().toString().padStart(2, '0');
        const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
        const year = originalDate.getFullYear();
        return `${year}-${month}-${day}`
    };
    const form = useForm<z.infer<typeof UserExpSchema>>({
        resolver: zodResolver(UserExpSchema),
        defaultValues: {
            companyName: data?.companyName || "",
            designation: data?.designation || "",
            experience: data?.experience?.toString() || "",
            type: data?.type || "Full-time",
            startDate: getDate(data?.startDate) || "",
            endDate: getDate(data?.endDate) || "",
            jobProfile: data?.jobProfile || "",
            skills: data?.skills || []
        },
    });

    const updateExp = async (values: ExpFormValue) => {
        try {
            const id = data?._id;
            await updateUserExp({ id, val: values }).unwrap();
            toast({
                description: "User experience added successfully"
            });
            setOpenDialog(false);
        } catch (err) {
            const apiError = err as TApiError;
            toast({
                variant: "destructive",
                description: apiError.data.message,
            });
        }
    }

    if (!data) return <Loader />
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="sm:max-w-[50%] rounded scrollbar-hide overflow-y-scroll max-h-full">
                <DialogHeader>
                    <DialogTitle>Edit Experience</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(updateExp)} className="space-y-8">
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
                        <Button
                            className="float-right"
                            disabled={!form.formState.isDirty}
                            type="submit"
                        >
                            Update
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateUserExp