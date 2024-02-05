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
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod";
import SelectInput from '../../form/multiSelectInput/SelectInput'
import { tagsData } from '../../../constants/tagsData'
import { industryTypes } from '../../../constants/industryTypes'
import { skillData } from '../../../constants/skillData'
import { useToast } from '../../../ui/use-toast'
import { DialogClose } from '../../../ui/dialog';
import CompanyUpdateSchema from '../../../@types/zod/CompanyUpdateSchema';

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


const EditCompanyProfile = ({ company, setOpen }: { company: any, setOpen: Function }) => {
    const { toast } = useToast();
    console.log(company);
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

    const updateCompanyData = (data: FormValues) => {
        console.log(data, "edit data");
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
                    <Button type='submit' className='float-right mt-5'>Update</Button>

                </form>
            </Form>
        </>
    )
}

export default EditCompanyProfile