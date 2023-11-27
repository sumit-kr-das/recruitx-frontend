import Container from "../../layout/Container";
import React from "react";
import TitleBar from "../../components/recruit/titleBar/TitleBar";

const DeleteCompany = () => {
	const handleSubmit = () => {};
	return (
		<Container>
			<TitleBar
				title="Employer Delete Profile"
				path="Employer / Dashboard / Delete Account"
			/>
			<div className="bg-white p-10 rounded-lg mt-5">
				<form onSubmit={handleSubmit}>
					<div className="w-1/2">
						<label
							htmlFor="first-name"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Enter your password To Delete Account
						</label>
						<div className="mt-2">
							<input
								// value={minExprience}
								// onChange={(e) => updateFields({ minExprience: e.target.value })}
								type="password"
								name="minExprience"
								id="minExprience"
								autoComplete="given-name"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
					<button
						type="submit"
						className="mt-4 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Delete Account
					</button>
				</form>
			</div>
		</Container>
	);
};

export default DeleteCompany;
