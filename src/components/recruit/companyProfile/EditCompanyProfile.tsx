import { Input } from '../../../ui/input';
import { Button } from '../../../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { industryTypes } from '../../../constants/industryTypes';
import { useToast } from '../../../ui/use-toast';
import CompanyUpdateSchema from '../../../@types/zod/CompanyUpdateSchema';
import { useApproveCompanyMutation } from '../../../features/admin/post/updateApproveCompanyApiSlice';
import { TApiError } from '../../../@types/TApiError';

type FormValues = {
    companyName: string,
    address: string,
    designation: string,
    email: string,
    industry: string,
    name: string,
    phone: string,
    pin: string
}

type CompanyProps = {
    _id: string,
    name: string,
    email: string,
    phone: string,
    password: string,
    companyName: string,
    industry: string,
    designation: string,
    pin: string,
    address: string,
    role: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    companyProfileId: {
        _id: string,
        logo: string
    }
}


const EditCompanyProfile = ({ company, setOpen }: { company: CompanyProps, setOpen: Function }) => {
    const { toast } = useToast();
    const [updateCompany] = useApproveCompanyMutation();

    const form = useForm<z.infer<typeof CompanyUpdateSchema>>({
        resolver: zodResolver(CompanyUpdateSchema),
        defaultValues: {
            companyName: company?.companyName || "",
            address: company?.address || "",
            designation: company?.designation || "",
            email: company?.email || "",
            industry: company?.industry || "",
            name: company?.name || "",
            phone: company?.phone || "",
            pin: company?.pin || ""
        },
        mode: "onSubmit"
    });

    const updateCompanyData = async (data: FormValues) => {
        try {
            await updateCompany(data).unwrap();
            toast({
                description: "Job updated",
            });
        } catch (err) {
            const apiError = err as TApiError;
            toast({
                variant: "destructive",
                description: apiError.data.message
            })
        }
        setOpen(false);
    }

    return (
        <>
            <Form {...form}>
                <form className="" onSubmit={form.handleSubmit(updateCompanyData)} >
                    <div className='sm:flex sm:gap-4'>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='sm:flex sm:gap-4'>
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Phone" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="companyName"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
                                    <FormLabel>Company Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Company Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className='sm:flex sm:gap-4'>
                        <FormField
                            control={form.control}
                            name="designation"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
                                    <FormLabel>Designation</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Designation" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
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
                    </div>
                    <div className='sm:flex sm:gap-4'>
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="pin"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
                                    <FormLabel>Pin</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Pin" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button disabled={!form.formState.isDirty} type='submit' className='float-right mt-5'>Update</Button>

                </form>
            </Form>
        </>
    )
}

export default EditCompanyProfile