import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/logo.svg";
import {
  selectCurrentRole,
  selectCurrentUser,
} from "../../features/auth/authSlice";
import RadixMenu from "../../themes/RadixMenu";
import { recruiterMenu, userMenu } from "../../constants/recruterMenu";
import { Search, X } from "lucide-react";
import SearchComponent from "../mnjuser/userHome/search/Search";

const TopHeader = () => {
  const [search, setSearch] = useState<boolean>(false);
  const user = useSelector(selectCurrentUser);
  const role = useSelector(selectCurrentRole);
  return (
    <header className=" bg-white shadow-sm fixed w-full z-20">
      <nav className="max-w-screen-xl mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/">
            <img className="w-32" src={MainLogo} alt="main logo" />
          </Link>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                to="/mnjuser/jobs"
                className="text-sm text-black relative after:absolute after:content-[''] after:h-[1.5px] after:w-0 after:-bottom-[4px] after:left-0 after:right-0  after:bg-black hover:after:w-full"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/mnjuser/companies"
                className="text-sm text-black relative after:absolute after:content-[''] after:h-[1.5px] after:w-0 after:-bottom-[4px] after:left-0 after:right-0  after:bg-black hover:after:w-full"
              >
                Companies
              </Link>
            </li>
          </ul>
        </div>

        {/* search */}
        {role && role === "user" && (
          <div className="relative mx-auto  cursor-pointer">
            <div
              onClick={() => setSearch((prev) => !prev)}
              className="text-gray-400 flex items-center border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
            >
              Search
            </div>
            <button type="button" className="absolute right-0 top-0 mt-2 mr-4">
              <Search className="w-[15px]" />
            </button>
          </div>
        )}
        {/* show/hide search */}
        {search && (
          <div className="absolute top-0 left-0 w-full">
            <div className="bg-white py-5">
              <SearchComponent />
            </div>
            <div className="bg-gradient-to-b from-white to-transparent h-[100px]"></div>
            <div
              onClick={() => setSearch((prev) => !prev)}
              className="absolute top-[20%] right-[20%] cursor-pointer"
            >
              <X className="w-[40px]" />
            </div>
          </div>
        )}

        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link to="/mnjuser/login">
                <button className="bg-cyan-500 text-white text-sm px-5 py-2 rounded-md hover:bg-cyan-600">
                  Login
                </button>
              </Link>
              <Link to="/mnjuser/register">
                <button className="bg-orange-500 text-white text-sm px-5 py-2 rounded-md hover:bg-orange-600">
                  Register
                </button>
              </Link>

              <Link
                to="/cLogin"
                className="text-sm text-black relative after:absolute after:content-[''] after:h-[1.5px] after:w-0 after:-bottom-[4px] after:left-0 after:right-0  after:bg-black hover:after:w-full"
              >
                Employers/Admin Login
              </Link>
            </>
          ) : role && role === "user" ? (
            <RadixMenu menu={userMenu} />
          ) : (
            <RadixMenu menu={recruiterMenu} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default TopHeader;
