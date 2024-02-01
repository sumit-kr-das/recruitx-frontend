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
import RadixMenu from "../../themes/RadixMenu";
import { Button } from "../../ui/button";
import SearchComponent from "../mnjuser/userHome/search/Search";
import NavigationMenus from "./NavigationMenus";
import Sidebar from "./Sidebar";

const TopHeader = () => {
  const [search, setSearch] = useState<boolean>(false);
  const user = useSelector(selectCurrentUser);
  const role = useSelector(selectCurrentRole);
  return (
    <header className=" bg-white shadow-sm fixed w-full z-20">
      <nav className="max-w-screen-xl mx-auto px-4 py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/">
            <img className="w-32" src={MainLogo} alt="main logo" />
          </Link>
          <div className="hidden md:block">
            <NavigationMenus />
          </div>
        </div>

        {/* search */}
        {role && role === "user" && (
          <div className="relative mx-auto cursor-pointer">
            <div
              onClick={() => setSearch((prev) => !prev)}
              className="text-gray-400 flex items-center border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
            >
              Search jobs
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

        <div className="hidden md:flex items-center gap-4">
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
            <RadixMenu menu={userMenu} />
          ) : (
            <RadixMenu menu={recruiterMenu} />
          )}
        </div>
        <div className="md:hidden">
          <Sidebar />
        </div>
      </nav>
    </header>
  );
};

export default TopHeader;
