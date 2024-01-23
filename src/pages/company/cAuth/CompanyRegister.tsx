import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
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
import { useToast } from "../../../ui/use-toast";

const INITIAL_DATA: TInitialData = {
	name: "",
	email: "",
	phone: "",
	password: "",
	companyName: "",
	industry: "",
	designation: "",
	pin: "",
	address: "",
};

const CompanyRegister = () => {
	const [data, setData] = useState(INITIAL_DATA);
	const updateFields = (fields: Partial<TInitialData>) => {
		setData((prev) => {
			return { ...prev, ...fields };
		});
	};
	const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
		<BasicDetails key="basic" {...data} updateFields={updateFields} />,
		<CompanyDetails key="company" {...data} updateFields={updateFields} />,
	]);

	const [cRegister, { isLoading }] = useCRegisterMutation();
	const dispatch = useDispatch();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (!isLastStep) {
			return next();
		}
		try {
			const userData = await cRegister(data).unwrap();
			dispatch(setCredentials(userData));
			setData(INITIAL_DATA);
			toast.success("Login successfull");
		} catch (err) {
			const apiError = err as TApiError;
			toast.error(apiError.data.message);
		}
	};
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
						<form className="space-y-6" onSubmit={handleSubmit}>
							{step}
							<div className="flex items-center gap-2">
								{!isFirstStep && (
									<Button
										onClick={back}
										className="w-full mt-4"
									>
										Prev
									</Button>
								)}
								{isLoading ? (
									<Button
										disabled={true}
										className="w-full mt-4"
									>
										Saving...
									</Button>
								) : (
									<Button
										type="submit"
										className="w-full mt-4"
									>
										{isLastStep ? "Finish" : "Next"}
									</Button>
								)}
							</div>
						</form>
					</div>
				</div>
			</section>
		</main>
	);
};

export default CompanyRegister;
