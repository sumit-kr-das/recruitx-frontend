import { useState } from "react";
import { skillData } from "../../../../constants/skillData";
import { useAddUserProjectMutation } from "../../../../features/user/post/AddUserProjectApiSlice";
import { useToast } from "../../../../ui/use-toast";
import { Controller, useForm } from "react-hook-form";
import UserProjectSchema from "../../../../@types/zod/UserProjectSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { TApiError } from "../../../../@types/TApiError";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../../../../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../ui/form";
import { Input } from "../../../../ui/input";
import { Textarea } from "../../../../ui/textarea";
import SelectInput from "../../../form/multiSelectInput/SelectInput";
import { Button } from "../../../../ui/button";
type TProps = {
    isOpen: boolean;
    setIsOpen: (item: boolean) => void;
};

export type ProjectFormValue = {
    name: string,
    description: string,
    startDate: string,
    endDate?: string,
    associate: string,
    skills: string[]
}

const AddUserProject = ({ isOpen, setIsOpen }: TProps) => {
    const [skill, setSkill] = useState([skillData[0]]);
    const [addUserProject] = useAddUserProjectMutation();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof UserProjectSchema>>({
        resolver: zodResolver(UserProjectSchema),
        defaultValues: {
            name: "",
            description: "",
            startDate: "",
            endDate: "",
            associate: "",
            skills: []
        },
    });

    const submitUserProject = async (values: ProjectFormValue) => {
        try {
            await addUserProject(values).unwrap();
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
                    <DialogTitle>Add Project</DialogTitle>
                    <DialogDescription>
                        Add your company and personal projects here.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitUserProject)} className="space-y-8">
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
                        <Button className="float-right" type="submit">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default AddUserProject