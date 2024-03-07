import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../../../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../ui/form'
import { Button } from '../../../../ui/button'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { Input } from '../../../../ui/input'
import SelectInput from '../../../form/multiSelectInput/SelectInput'
import { skillData } from '../../../../constants/skillData'
import { useState } from 'react'
import Loader from '../../../loader/Loader'
import { useToast } from '../../../../ui/use-toast'
import { TApiError } from '../../../../@types/TApiError'
import { TUserProject } from '../../../../@types/user/TUserProject'
import { useUpdateUserProjectMutation } from '../../../../features/user/put/UpdateUserProjectApiSlice'
import UserProjectSchema from '../../../../@types/zod/UserProjectSchema'
import { ProjectFormValue } from './AddUserProject'
import { Textarea } from '../../../../ui/textarea'

type TProps = {
    data: TUserProject,
    openDialog: boolean,
    setOpenDialog: (value: boolean) => void;

}

const UpdateUserProject = ({ data, openDialog, setOpenDialog }: TProps) => {
    const [skill, setSkill] = useState([...data?.skills || skillData[0]]);
    const [updateUserProject] = useUpdateUserProjectMutation();
    const { toast } = useToast();

    const getDate = (srcDate: string) => {
        if (srcDate === "") return "";
        const originalDate = new Date(srcDate);
        const day = originalDate.getDate().toString().padStart(2, '0');
        const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
        const year = originalDate.getFullYear();
        return `${year}-${month}-${day}`
    };
    const form = useForm<z.infer<typeof UserProjectSchema>>({
        resolver: zodResolver(UserProjectSchema),
        defaultValues: {
            name: data?.name || "",
            description: data?.description || "",
            startDate: getDate(data?.startDate || ""),
            endDate: getDate(data?.endDate || ""),
            associate: data?.associate || "",
            skills: [...data?.skills || ""]
        },
    });

    const updateProject = async (values: ProjectFormValue) => {
        try {
            const id = data?._id;
            await updateUserProject({ id, val: values }).unwrap();
            toast({
                description: "User project added successfully"
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
                    <form onSubmit={form.handleSubmit(updateProject)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Project Name</FormLabel>
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
                            name="description"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Project Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter project description"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="startDate"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Project Start Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="date"
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
                                    <FormLabel> Project End Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="date"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="associate"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Project Associate</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="associate"
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
                        <Button className='float-right' type='submit' disabled={!form.formState.isDirty}
                        >Update</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateUserProject