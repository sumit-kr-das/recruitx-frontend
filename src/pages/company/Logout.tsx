import React from "react";
import Container from "../../layout/Container";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Logout = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<Container>
			<TitleBar
				title="Employer Logout Profile"
				path="Employer / Dashboard / Logout Account"
			/>
			<div className="bg-white p-10 rounded-lg mt-5">
				<button
					onClick={handleLogout}
					className="mt-4 rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-syan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Logout account
				</button>
			</div>
		</Container>
	);
};

export default Logout;
