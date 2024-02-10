
import { useSetCompanyProfileMutation } from "../../../../features/company/post/setCompanyProfileDetailsApiSlice";
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
import { Card } from "../../../../ui/card";
import { TApiError } from "../../../../@types/TApiError";

type FormValues = {
  description: string,
  type: string,
  tags: string[],
  teamSize: string,
  founded: string
}

const SetCompanyProfile = () => {
  const [setCompanyProfile] = useSetCompanyProfileMutation();
  const { toast } = useToast();
  const [value, setValue] = useState([tagsData[0]]);

  const form = useForm<z.infer<typeof CompanyProfileUpdateSchema>>({
    resolver: zodResolver(CompanyProfileUpdateSchema),
    defaultValues: {
      description: "",
      type: "",
      tags: [],
      teamSize: "",
      founded: "",

    },
    mode: "onSubmit"
  });

  const submitCompanyProfile = async (values: FormValues) => {
    const convertedData = {
      ...values,
      teamSize: parseInt(values.teamSize)
    };
    console.log(convertedData);
    try {
      await setCompanyProfile(convertedData).unwrap();
      toast({
        description: "Company profile added successfully"
      })
    } catch (err) {
      const apiError = err as TApiError;
      toast({
        variant: "destructive",
        description: apiError.data.message
      })
    }
  }

  return (
    <Card className="relative p-5  gap-5 mt-5">
      <Form {...form}>
        <form className="" onSubmit={form.handleSubmit(submitCompanyProfile)} >
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
                <FormItem className="sm:flex-1 mt-3">
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
          <Button type='submit' className='mt-5'>Update</Button>

        </form>
      </Form>
    </Card>
  );
};

export default SetCompanyProfile;
