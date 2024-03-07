import { useState } from "react";
import { skillData } from "../../../../constants/skillData";
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
import { useSetUserCertificateMutation } from "../../../../features/user/post/AddUserCertificateApiSlice";
import UserCertificateSchema from "../../../../@types/zod/UserCertificareSchema";

type TProps = {
    isOpen: boolean;
    setIsOpen: (item: boolean) => void;
};

export type CertificateFormValue = {
    title: string,
    source: string,
    description: string,
    startDate: string,
    endDate?: string
}
const AddUserCertificate = ({ isOpen, setIsOpen }: TProps) => {
    const [setUserCertificate] = useSetUserCertificateMutation();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof UserCertificateSchema>>({
        resolver: zodResolver(UserCertificateSchema),
        defaultValues: {
            title: "",
            source: "",
            description: "",
            startDate: "",
            endDate: ""
        },
    });

    const submitUserCertificate = async (values: CertificateFormValue) => {
        try {
            await setUserCertificate(values).unwrap();
            toast({
                description: "Your certificate added successfully"
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
                    <DialogTitle>Add Certificate</DialogTitle>
                    <DialogDescription>
                        Add your company and personal projects here.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitUserCertificate)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Certificate Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter Title"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="source"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Source</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter Source"
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
                                    <FormLabel> Description </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter Title"
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
                                    <FormLabel> Start Date</FormLabel>
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
                                    <FormLabel> End Date</FormLabel>
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
                        <Button type="submit" className="float-right">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default AddUserCertificate