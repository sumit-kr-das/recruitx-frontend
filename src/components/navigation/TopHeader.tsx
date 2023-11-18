import { Link } from "react-router-dom";
import MainLogo from "../../assets/logo.svg";

const TopHeader = () => {
	return (
		<header className="bg-white shadow-sm fixed w-full z-20">
			<nav className="max-w-screen-xl mx-auto py-5 flex items-center justify-between">
				<div className="flex items-center gap-12">
					<Link to="/">
						<img className="w-32" src={MainLogo} alt="main logo" />
					</Link>
					<ul className="flex items-center gap-4">
						<li>
							<Link to="/" className="text-sm text-slate-500">
								Jobs
							</Link>
						</li>
						<li>
							<Link to="/" className="text-sm text-slate-500">
								Companies
							</Link>
						</li>
						<li>
							<Link to="/" className="text-sm text-slate-500">
								Services
							</Link>
						</li>
					</ul>
					{/* <div>
						<input type="text" placeholder="Search jobs here" />
						<button>Search</button>
					</div> */}
				</div>

				<div className="flex items-center gap-4">
					<button className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600">
						Login
					</button>
					<button className="bg-orange-500 text-white text-sm px-5 py-2 rounded-md hover:bg-orange-600">
						Register
					</button>
					<div className="relative ">
						<Link
							to="/recruit/login"
							className="flex items-center gap-2 cursor-pointer"
						>
							<p className="text-sm text-slate-500">Employers Login</p>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default TopHeader;
