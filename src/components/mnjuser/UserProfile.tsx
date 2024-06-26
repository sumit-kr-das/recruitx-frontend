import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlogSVG from "../../assets/icons/blog.svg";
import CompanyeSVG from "../../assets/icons/company.svg";
import HomeSVG from "../../assets/icons/home.svg";
import InfoSVG from "../../assets/icons/info.svg";
import JobsSVG from "../../assets/icons/jobs.svg";
import UserDefault from "../../assets/user-default-profile.png";
import { selectCurrentUserData } from "../../features/user/userSlice";
import { Button } from "../../ui/button";
import { BadgeAlert, ShieldCheck } from "lucide-react";
import { PublicStatsSkeletion } from "../skeleton/PublicStatsSkeletion";

const UserProfile = () => {
  const { user, info } = useSelector(selectCurrentUserData);

  return (
    <div className="p-4 text-center">
      {/* user profile section */}
      {user.name ? (
        <div className="flex items-center justify-center flex-col">
          <img
            src={info?.photo || UserDefault}
            width={120}
            alt="user_default"
            className="rounded-full object-cover border w-[120] h-[120]"
          />
          <div
            className="flex items-center gap-2"
            title={user?.status === "verified" ? "verified" : "not verified"}
          >
            <h1 className="font-bold capitalize">{user?.name}</h1>
            {user?.status === "verified" ? (
              <ShieldCheck className="w-4 h-4 text-green-600" />
            ) : (
              <BadgeAlert className="w-4 h-4 text-red-600" />
            )}
          </div>
          <p className="text-sm font-medium capitalize">{user?.workStatus}</p>
          <p className="text-xs text-gray-400">Last updated 29m ago</p>
          <Link to="/mnjuser/profile" className="mt-2 ">
            <Button variant="outline">View Profile</Button>
          </Link>
        </div>
      ) : (
        <PublicStatsSkeletion />
      )}
      {/* profile performence section */}
      <div className="bg-slate-100 mt-4 rounded-xl p-2">
        <div className="flex items-center justify-center gap-1">
          <p className="font-bold text-sm">Profile performance</p>
          <img
            src={InfoSVG}
            width={15}
            alt="main logo"
            className="rounded-full object-cover cursor-pointer"
          />
        </div>
        <div className="flex items-center mt-2">
          <div className="flex-1">
            <p className="text-xs font-medium">
              Search <br /> appearances
            </p>
            <p className="font-bold text-blue-600 mt-1">0</p>
          </div>
          <div className="flex-1">
            <p className="text-xs font-medium">
              Recruiter <br /> actions
            </p>
            <p className="font-bold text-blue-600 mt-1">0</p>
          </div>
        </div>
      </div>
      {/* home navigation section */}
      <div className="mt-4">
        <ul>
          <li>
            <Link
              to="/mnjuser/home"
              className="flex gap-1 py-2 px-4 rounded-lg hover:bg-green-100"
            >
              <img src={HomeSVG} width={20} alt="nav_logo" />
              <p>My Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="/mnjuser/jobs"
              className="flex gap-1 py-2 px-4 rounded-lg hover:bg-green-100"
            >
              <img src={JobsSVG} width={20} alt="nav_logo" />
              <p>Search Jobs</p>
            </Link>
          </li>
          <li>
            <Link
              to="/mnjuser/appliedJobs"
              className="flex gap-1 py-2 px-4 rounded-lg hover:bg-green-100"
            >
              <img src={BlogSVG} width={20} alt="nav_logo" />
              <p>Applied Jobs</p>
            </Link>
          </li>
          <li>
            <Link
              to="/mnjuser/companies"
              className="flex gap-1 py-2 px-4 rounded-lg hover:bg-green-100"
            >
              <img src={CompanyeSVG} width={20} alt="nav_logo" />
              <p>Companies</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
