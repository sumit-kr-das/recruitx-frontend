
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
    } catch (error: any) {
      toast({
        variant: "destructive",
        description: error?.message
      })
    }
  }



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await setCompanyProfile(userData).unwrap();
  //     toast.success("Save successfull");
  //   } catch (err: any) {
  //     toast.success(err?.data?.msg);
  //     console.log("Error on company login", err);
  //   }
  // };
  // const handleCancel = () => {
  //   setUserData(INITIAL_DATA);
  // };
  return (
    <div className="relative bg-white p-5 rounded-lg gap-5 mt-5 shadow-lg">
      {/* <form onSubmit={handleSubmit}>
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Basic information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Increase the quality of your hire
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company description
              </label>
              <div className="mt-2">
                <textarea
                  value={userData.description}
                  onChange={(e) =>
                    setUserData({ ...userData, description: e.target.value })
                  }
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Enter a breaf description about yourself"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a breaf description about your career.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company type
              </label>
              <div className="mt-2">
                <select
                  value={userData.type}
                  onChange={(e) =>
                    setUserData({ ...userData, type: e.target.value })
                  }
                  id="category"
                  name="category"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="">Select type</option>
                  <option value="Private">Private</option>
                  <option value="Semi-Private">Semi-Private</option>
                  <option value="Govt-Undertaken">Govt-Undertaken</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select language
              </label>
              <div className="mt-2 w-full">
                <SelectInput
                  multiple
                  options={companyTagData}
                  value={cType}
                  onChange={(o) => {
                    setCtype(o);
                    setUserData({ ...userData, tags: cType });
                  }}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Team size
              </label>
              <div className="mt-2">
                <input
                  value={userData.teamSize}
                  onChange={(e) =>
                    setUserData({ ...userData, teamSize: e.target.value })
                  }
                  type="text"
                  name="minExprience"
                  id="minExprience"
                  autoComplete="minExprience"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="500+"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Established
              </label>
              <div className="mt-2">
                <input
                  value={userData.founded}
                  onChange={(e) =>
                    setUserData({ ...userData, founded: e.target.value })
                  }
                  type="text"
                  name="minExprience"
                  id="minExprience"
                  autoComplete="minExprience"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="1563"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            onClick={handleCancel}
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form> */}
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
    </div>
  );
};

export default SetCompanyProfile;
