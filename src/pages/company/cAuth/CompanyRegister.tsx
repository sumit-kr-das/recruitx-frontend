import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
import { FormField } from "../../../ui/form";

// const INITIAL_DATA: TInitialData = {
// 	name: "",
// 	email: "",
// 	phone: "",
// 	password: "",
// 	companyName: "",
// 	industry: "",
// 	designation: "",
// 	pin: "",
// 	address: "",
// };

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
	const { watch, register, handleSubmit, ...form } = useForm<FormValues>({ mode: "all" });

	const [cRegister, { isLoading }] = useCRegisterMutation();
	const dispatch = useDispatch();

	const registerCompany = async (data: FormValues) => {
		try {
			const userData = await cRegister(data).unwrap();
			dispatch(setCredentials(userData));
			console.log("registered");
			toast({
				description: "Your message has been sent.",
			});
		} catch (err) {
			const apiError = err as TApiError;
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
						<form className="space-y-6" onSubmit={handleSubmit(registerCompany)}>
							{
								step === 0 && (
									<>
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Your name
											</label>
											<div className="mt-2">
												<Input
													type="text"
													required
													placeholder="Enter your original name"
													className=""
													{...register("name")}
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Email address
											</label>
											<div className="mt-2">
												<Input
													type="email"
													required
													placeholder="Enter your email address"
													className=""
													{...register("email")}
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="phone"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Phone no
											</label>
											<div className="mt-2">
												<Input
													type="text"
													required
													placeholder="Enter phone no"
													{...register("phone")}
												/>
											</div>
										</div>

										<div>
											<div className="flex items-center justify-between">
												<label
													htmlFor="password"
													className="block text-sm font-medium leading-6 text-gray-900"
												>
													Password
												</label>
											</div>
											<div className="mt-2">
												<Input
													type="password"
													required
													placeholder="Enter your password"
													className=""
													{...register("password")}
												/>
											</div>
										</div>
									</>
								)
							}

							{
								step === 1 && (
									<>
										<div>
											<label
												htmlFor="companyName"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Company name (as per KYC documents)
											</label>
											<div className="mt-2">
												<Input
													type="text"
													required
													placeholder="Enter your company name"
													className=""
													{...register("companyName")}
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="designation"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Your designation
											</label>
											<div className="mt-2">
												<Input
													type="text"
													required
													placeholder="Enter your designation"
													className=""
													{...register("designation")}
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="pin"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Pin code
											</label>
											<div className="mt-2">
												<Input
													type="text"
													required
													placeholder="Enter your pin no"
													className=""
													{...register("pin")}
												/>
											</div>
										</div>

										<div>
											<div className="flex items-center justify-between">
												<label
													htmlFor="address"
													className="block text-sm font-medium leading-6 text-gray-900"
												>
													Street address
												</label>
											</div>
											<div className="mt-2">
												<Input
													type="text"
													required
													placeholder="Enter your street address"
													className=""
													{...register("address")}
												/>
											</div>
										</div>

										<div>
											<div className="flex items-center justify-between">
												<label className="block text-sm font-medium leading-6 text-gray-900">
													Select industry
												</label>
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
													</Select>
												)}
											/>
										</div>

										<div className="mt-4 flex items-center gap-2">
											<Input
												id="comments"
												name="comments"
												type="checkbox"
												required
												className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
											/>
											<p className=" text-sm text-gray-500">
												I agree to Terms & conditions and Privacy policy
											</p>
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

					</div>
				</div>
			</section>
		</main>
	);
};

export default CompanyRegister;
