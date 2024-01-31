import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TApiError } from "../../../@types/TApiError";
import { setCredentials } from "../../../features/auth/authSlice";
import { useCRegisterMutation } from "../../../features/auth/company/companyRegisterApiSlice";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";
import { useToast } from "../../../ui/use-toast";
import { industryTypes } from "../../../constants/industryTypes";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../ui/form";
import CompanyRegisterSchema from "../../../@types/zod/CompanyRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import TopHeader from "../../../components/navigation/TopHeader";

type FormValues = {
	name: string,
	email: string,
	phone: string,
	password: string,
	companyName: string,
	industry: string,
	designation: string,
	pin: string,
	address: string,
}

const CompanyRegister = () => {
	const [step, setStep] = useState(0);
	const { toast } = useToast();
	const navigate = useNavigate();
	const form = useForm<z.infer<typeof CompanyRegisterSchema>>({
		resolver: zodResolver(CompanyRegisterSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			password: "",
			companyName: "",
			industry: "",
			designation: "",
			pin: "",
			address: "",
		},
	});

	const [cRegister, { isLoading }] = useCRegisterMutation();
	const dispatch = useDispatch();

	const registerCompany = async (data: FormValues) => {
		try {
			const userData = await cRegister(data).unwrap();
			toast({
				description: "Company Registered Successfully",
			});
			dispatch(setCredentials(userData));
			navigate("/dashboard");

		} catch (err) {
			const apiError = err as TApiError;
			toast({
				variant: "destructive",
				description: apiError?.data.message,
			});
		}
	}

	return (
		<>
			<div className="bg-cyan-50">
				<TopHeader />
				<div className="pt-40 w-full h-auto flex justify-center">
					<div className="h-fit rounded-xl bg-white p-10 mb-10 shadow md:w-[800px]">
						<h1 className="text-2xl mb-5 font-extrabold text-center">
							Get started with Naukri <br /> Recruitment Solutions
						</h1>
						<p className="text-sm text-gray-500 text-center mb-5">
							or already registered?{" "}
							<Link
								to="/recruit/login"
								className="font-semibold leading-6 text-cyan-500 hover:text-cyan-600"
							>
								Login now
							</Link>
						</p>
						<Form {...form}>

							<form className="space-y-8" onSubmit={form.handleSubmit(registerCompany)} >
								{
									step === 0 && (
										<>
											<div className="flex gap-4">
												<FormField
													control={form.control}
													name="name"
													render={({ field }) => (
														<FormItem className="flex-1">
															<FormLabel>Your Name</FormLabel>
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
														<FormItem className="flex-1">
															<FormLabel>Email</FormLabel>
															<FormControl>
																<Input placeholder="Enter Your Email" {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>
											<div className="flex gap-4">
												<FormField
													control={form.control}
													name="phone"
													render={({ field }) => (
														<FormItem className="flex-1">
															<FormLabel>Phone No</FormLabel>
															<FormControl>
																<Input placeholder="Enter phone no" {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={form.control}
													name="password"
													render={({ field }) => (
														<FormItem className="flex-1">
															<FormLabel>Password</FormLabel>
															<FormControl>
																<Input type="password" placeholder="Enter Password" {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>

										</>
									)
								}

								{
									step === 1 && (
										<>
											<div className="flex gap-4">
												<FormField
													control={form.control}
													name="companyName"
													render={({ field }) => (
														<FormItem className="flex-1">
															<FormLabel>Company Name</FormLabel>
															<FormControl>
																<Input placeholder="Your Company Name" {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={form.control}
													name="designation"
													render={({ field }) => (
														<FormItem className="flex-1">
															<FormLabel>Designation</FormLabel>
															<FormControl>
																<Input placeholder="Your Designation" {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>
											<div className="flex gap-4">
												<FormField
													control={form.control}
													name="pin"
													render={({ field }) => (
														<FormItem className="flex-1">
															<FormLabel>Pin Code</FormLabel>
															<FormControl>
																<Input placeholder="Your Pin" {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
												<FormField
													control={form.control}
													name="address"
													render={({ field }) => (
														<FormItem className="flex-1">
															<FormLabel>Street address</FormLabel>
															<FormControl>
																<Input placeholder="Your Address" {...field} />
															</FormControl>
															<FormMessage />
														</FormItem>
													)}
												/>
											</div>
											<FormField
												control={form.control}
												name="industry"
												render={({ field }) => (
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
												)}
											/>
										</>
									)
								}

								<div className="flex items-center gap-2">
									{
										step === 0 && (
											<>
												<Button
													className="w-full mt-4"
													onClick={() => setStep(1)}
												>
													Next
												</Button>
											</>
										)
									}
									{
										step === 1 && (
											<>
												<div className="flex justify-between w-full">
													<Button
														className="w-[100px] mt-4"
														onClick={() => setStep(0)}
													>
														Previous
													</Button>
													<Button
														className="w-[100px] mt-4"
														type="submit"
													>
														Register
													</Button>
												</div>
											</>
										)
									}
								</div>
							</form>
						</Form>
					</div>
				</div>
			</div>
		</>
	);
};

export default CompanyRegister;
