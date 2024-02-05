import { Input } from '../../../../ui/input';
import { Button } from '../../../../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../../../ui/select";
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import { useToast } from '../../../../ui/use-toast';
import CompanyProfileUpdateSchema from '../../../../@types/zod/CompanyProfileUpdateSchema';
import { Textarea } from '../../../../ui/textarea';
import { tagsData } from '../../../../constants/tagsData';
import SelectInput from '../../../form/multiSelectInput/SelectInput';
import { useState } from 'react';
import { useUpdateCompanyProfileMutation } from '../../../../features/company/put/updateCompanyProfileDetailsApiSlice';

type FormValues = {
    description: string,
    type: string,
    tags: string[],
    teamSize: string,
    founded: string
}

type Profiledata = {
    description: string,
    type: string,
    tags: string[],
    teamSize: number,
    founded: string,
    logo: string
}

const EditCompanyInfo = ({ data, setOpen }: { data: Profiledata, setOpen: Function }) => {
    const { toast } = useToast();
    const [value, setValue] = useState([...data?.tags || tagsData[0]]);
    const [updateCompanyProfile] = useUpdateCompanyProfileMutation();

    const form = useForm<z.infer<typeof CompanyProfileUpdateSchema>>({
        resolver: zodResolver(CompanyProfileUpdateSchema),
        defaultValues: {
            description: data?.description || "",
            type: data?.type || "",
            tags: data?.tags || [],
            teamSize: data?.teamSize.toString() || "",
            founded: data?.founded || "",

        },
        mode: "onSubmit"
    });

    const updateCompanyInfo = async (values: FormValues) => {
        const convertedData = {
            ...values,
            teamSize: parseInt(values.teamSize)
        };

        try {
            await updateCompanyProfile(convertedData).unwrap();
            toast({
                description: "Company profile updated successfully"
            })
        } catch (error: any) {
            toast({
                variant: "destructive",
                description: error?.message
            })
        }
        setOpen(false);

    }



    return (
        <>
            <Form {...form}>
                <form className="" onSubmit={form.handleSubmit(updateCompanyInfo)} >
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="sm:flex-1 mt-3">
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Enter Description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='sm:flex sm:gap-4'>
                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
                                    <FormLabel>Company Type</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Company Type"
                                                />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="Private">Private</SelectItem>
                                                    <SelectItem value="Semi-Private">Semi-Private</SelectItem>
                                                    <SelectItem value="Govt-Undertaken">Govt-Undertaken</SelectItem>
                                                    <SelectItem value="other">other</SelectItem>
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
                            render={() => (
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
                    <div className='sm:flex sm:gap-4'>
                        <FormField
                            control={form.control}
                            name="teamSize"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
                                    <FormLabel>Team Size</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Team Size" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="founded"
                            render={({ field }) => (
                                <FormItem className="sm:flex-1 mt-3">
                                    <FormLabel>Founding Year</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Founding Year" {...field} />
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

export default EditCompanyInfo