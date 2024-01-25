import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { TApiError } from "../../../@types/TApiError";
import { TInitialData } from "../../../@types/recruit/companyRegister";
import RegisterImg from "../../../assets/recruit/registration.png";
import BasicDetails from "../../../components/recruit/companyRegister/BasicDetails";
import CompanyDetails from "../../../components/recruit/companyRegister/CompanyDetails";
import useMultistepForm from "../../../customHooks/useMultistepForm";
import { setCredentials } from "../../../features/auth/authSlice";
import { useCRegisterMutation } from "../../../features/auth/company/companyRegisterApiSlice";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../../ui/select";
import { useToast } from "../../../ui/use-toast";
import { industryTypes } from "../../../constants/industryTypes";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../ui/form";
import CompanyRegisterSchema from "../../../@types/zod/CompanyRegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
			console.log(apiError);
			toast({
				variant: "destructive",
				description: apiError?.data.message,
			});
		}
	}

	return (
		<main className="max-w-screen-xl mx-auto pb-10 flex justify-between">
			<section className="mt-32 w-full flex justify-between">
				<div className="hidden md:block">
					<p className="text-center text-sm font-semibold text-cyan-500">
						WELCOME
					</p>
					<h2 className="text-center text-2xl font-semibold mb-8 mt-2">
						Get started with Naukri <br /> Recruitment Solutions
					</h2>
					<img src={RegisterImg} width={400} height={400} alt="register img" />
				</div>
				<div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
					<div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
						<h1 className="text-2xl font-semibold">Create Account</h1>
						<p className="text-sm text-gray-500">
							or already registered?{" "}
							<Link
								to="/recruit/login"
								className="font-semibold leading-6 text-cyan-500 hover:text-cyan-600"
							>
								Login now
							</Link>
						</p>
					</div>
					<div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
						<Form {...form}>

							<form className="space-y-6" onSubmit={form.handleSubmit(registerCompany)}>
								{
									step === 0 && (
										<>
											<FormField
												control={form.control}
												name="name"
												render={({ field }) => (
													<FormItem>
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
													<FormItem>
														<FormLabel>Email</FormLabel>
														<FormControl>
															<Input placeholder="Enter Your Email" {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="phone"
												render={({ field }) => (
													<FormItem>
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
													<FormItem>
														<FormLabel>Password</FormLabel>
														<FormControl>
															<Input type="password" placeholder="Enter Password" {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</>
									)
								}

								{
									step === 1 && (
										<>
											<FormField
												control={form.control}
												name="companyName"
												render={({ field }) => (
													<FormItem>
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
													<FormItem>
														<FormLabel>Designation</FormLabel>
														<FormControl>
															<Input placeholder="Your Designation" {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="pin"
												render={({ field }) => (
													<FormItem>
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
													<FormItem>
														<FormLabel>Street address</FormLabel>
														<FormControl>
															<Input placeholder="Your Address" {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
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
											<div className="mt-4 flex items-center gap-2">
												{/* <Input
													id="comments"
													name="comments"
													type="checkbox"
													required
													className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
												/> */}
												{/* <p className=" text-sm text-gray-500">
													I agree to Terms & conditions and Privacy policy
												</p> */}
											</div>
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
			</section>
		</main>
	);
};

export default CompanyRegister;
