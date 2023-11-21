import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import MainLogo from "../../assets/logo.svg";
import { selectCurrentUser } from "../../features/auth/authSlice";
import RadixAvatar from "../../themes/RadixAvatar";

const TopHeader = () => {
	const [show, setShow] = useState(true);
	const location = useLocation().pathname;
	const restrictedPaths = ["/cLogin", "/cRegister"];
	useEffect(() => {
		if (restrictedPaths.includes(location)) {
			console.log(show);

			setShow(false);
		} else {
			setShow(true);
		}
	}, [location]);

	const user = useSelector(selectCurrentUser);

	const header = (
		<header className="bg-white shadow-sm fixed w-full z-20">
			<nav className="max-w-screen-xl mx-auto py-5 flex items-center justify-between">
				<div className="flex items-center gap-12">
					<Link to="/">
						<img className="w-32" src={MainLogo} alt="main logo" />
					</Link>
					<ul className="flex items-center gap-4">
						<li>
							<Link
								to="/"
								className="text-sm text-black relative after:absolute after:content-[''] after:h-[1.5px] after:w-0 after:-bottom-[4px] after:left-0 after:right-0  after:bg-black hover:after:w-full"
							>
								Jobs
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="text-sm text-black relative after:absolute after:content-[''] after:h-[1.5px] after:w-0 after:-bottom-[4px] after:left-0 after:right-0  after:bg-black hover:after:w-full"
							>
								Companies
							</Link>
						</li>
						<li>
							<Link
								to="/"
								className="text-sm text-black relative after:absolute after:content-[''] after:h-[1.5px] after:w-0 after:-bottom-[4px] after:left-0 after:right-0  after:bg-black hover:after:w-full"
							>
								Services
							</Link>
						</li>
					</ul>
				</div>

				<div className="flex items-center gap-4">
					{!user ? (
						<>
							<button className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600">
								Login
							</button>
							<button className="bg-orange-500 text-white text-sm px-5 py-2 rounded-md hover:bg-orange-600">
								Register
							</button>
							<div>
								<Link
									to="/cLogin"
									className="text-sm text-black relative after:absolute after:content-[''] after:h-[1.5px] after:w-0 after:-bottom-[4px] after:left-0 after:right-0  after:bg-black hover:after:w-full"
								>
									Employers Login
								</Link>
							</div>
						</>
					) : (
						<RadixAvatar />
					)}
				</div>
			</nav>
		</header>
	);

	return show && header;
};

export default TopHeader;
