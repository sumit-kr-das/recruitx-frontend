import { Search, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/logo.svg";
import { recruiterMenu, userMenu } from "../../constants/recruterMenu";
import {
  selectCurrentRole,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import { Button } from "../../ui/button";
import SearchComponent from "../mnjuser/userHome/search/Search";
import Sidebar from "./Sidebar";
import MobileSidebar from "../recruit/MobileSidebar";
import DropDownMenu from "../DropDownMenu";

const TopHeader = () => {
  const [search, setSearch] = useState<boolean>(false);
  const user = useSelector(selectCurrentUser);
  const role = useSelector(selectCurrentRole);
  return (
    <header className="bg-white shadow-sm fixed w-full z-20">
      <nav className="max-w-screen-xl mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/">
            <img className="w-24 md:w-32" src={MainLogo} alt="main logo" />
          </Link>
          <div className="hidden md:block">
            <ul className="flex items-center justify-center gap-x-8">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mnjuser/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/mnjuser/companies">Company</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* search */}
        {role && role === "user" && (
          <div
            className="absolute top-5 left-1/2 -translate-x-1/2  mx-auto cursor-pointer hidden lg:block"
            onClick={() => setSearch((prev) => !prev)}
          >
            <div className="text-gray-400 flex items-center border border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none leading-9">
              Search jobs
            </div>
            <button type="button" className="absolute right-0 top-0 mt-2 mr-4">
              <Search className="w-[15px] text-gray-400" />
            </button>
          </div>
        )}
        {/* show/hide search */}
        {search && (
          <div className="pt-4 md:pt-0 absolute top-0 left-0 w-full z-30">
            <div className="bg-white py-5">
              <SearchComponent />
            </div>
            <div className="bg-gradient-to-b from-white to-transparent h-[100px]"></div>
            <div
              onClick={() => setSearch((prev) => !prev)}
              className="absolute top-[2%] md:top-[20%] right-[1%] md:right-[10%] cursor-pointer"
            >
              <X className="w-[40px]" />
            </div>
          </div>
        )}

        <div className="hidden lg:flex items-center gap-4">
          {!user ? (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/mnjuser/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          ) : role && role === "user" ? (
            <DropDownMenu menu={userMenu} />
          ) : (
            <DropDownMenu menu={recruiterMenu} />
          )}
        </div>
        {role && (role === "company" || role === "admin") ? (
          <>
            <div className="lg:hidden">
              <MobileSidebar />
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center gap-2 lg:hidden">
            {role && role === "user" && (
              <Button
                onClick={() => setSearch((prev) => !prev)}
                variant="outline"
                size="icon"
                className="rounded-full "
              >
                <Search className="w-5 text-gray-500" />
              </Button>
            )}
            <Sidebar />
          </div>
        )}
      </nav>
    </header>
  );
};

export default TopHeader;
