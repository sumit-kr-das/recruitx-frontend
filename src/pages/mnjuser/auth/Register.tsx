import { setCredentials } from "../../../features/auth/authSlice";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast/headless";
import { useDispatch } from "react-redux";
import { useUserRegisterMutation } from "../../../features/auth/user/userRegisterApiSlice";
import Container from "../../../layout/Container";

type TINITIAL_USER_STATE = {
	name: string;
	email: string;
	phoneNo: string;
	workStatus: string;
	password: string;
};

const INITIAL_USER_STATE: TINITIAL_USER_STATE = {
	name: "",
	email: "",
	phoneNo: "",
	workStatus: "",
	password: "",
};

const Register = () => {
	const [user, setUser] = useState(INITIAL_USER_STATE);
	const [userRegister, { isLoading }] = useUserRegisterMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleUserValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
            console.log(user);
			const userData = await userRegister(user).unwrap();
			dispatch(setCredentials(userData));
			setUser(INITIAL_USER_STATE);
			toast.success("Register successfull");
			navigate("/userHome");
		} catch (err) {
			console.log("Error on company login", err);
			toast.error("Enter valid credentials");
		}
	};
	return (
		<Container>
			<div className="mt-32 w-full flex justify-between">
				<div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
					<div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
						<h1 className="text-2xl font-semibold">
							Find a job & grow your career
						</h1>
						<p className="text-sm text-gray-500">
							Already Registered{" "}
							<Link
								to="/login"
								className="font-semibold leading-6 text-cyan-500 hover:text-cyan-600"
							>
								Login now
							</Link>
						</p>
					</div>
					<div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Full name
								</label>
								<div className="mt-2">
									<input
										name="name"
										value={user.name}
										onChange={handleUserValue}
										type="text"
										required
										placeholder="What is your name?"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
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
									<input
										name="email"
										value={user.email}
										onChange={handleUserValue}
										type="email"
										required
										placeholder="Tell us your email id"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
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
									<input
										name="password"
										value={user.password}
										onChange={handleUserValue}
										type="password"
										required
										placeholder="Create a password for your account"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Mobile number
								</label>
								<div className="mt-2">
									<input
										name="phoneNo"
										value={user.phoneNo}
										onChange={handleUserValue}
										type="text"
										required
										placeholder="Mobile number"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label className="block text-sm font-medium leading-6 text-gray-900">
										Work status
									</label>
								</div>
								<div className="mt-2">
									<select
										name="workStatus"
										value={user.workStatus}
										onChange={handleUserValue}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
									>
										<option value="">Select industry type</option>
										<option value="experienced">I'm experienced</option>
										<option value="fresher">I'm a fresher</option>
									</select>
								</div>
							</div>

							{isLoading ? (
								<button
									disabled={true}
									className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Loading...
								</button>
							) : (
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Register now
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Register;
