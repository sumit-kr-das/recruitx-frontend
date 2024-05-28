import {
  BadgeAlert,
  Briefcase,
  Building2,
  Home,
  LogOut,
  Menu,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import DefaultImg from "../../assets/user-default-profile.png";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentRole } from "../../features/auth/authSlice";
import {
  removeUserData,
  selectCurrentUserData,
} from "../../features/user/userSlice";
import { removeCompanyData } from "../../features/company/companySlice";

const Sidebar = () => {
  const role = useSelector(selectCurrentRole);
  const { user, info } = useSelector(selectCurrentUserData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(removeUserData());
    dispatch(removeCompanyData());
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="px-2" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Main menu</SheetTitle>
        </SheetHeader>
        {role ? (
          <div className="p-8 flex items-center justify-center text-center rounded-lg flex-col my-4">
            <img
              className="w-32 h-32 rounded-full border"
              src={info?.photo || DefaultImg}
              alt="avatar-img"
            />
            <h1 className="text-lg font-semibold mt-2">{user?.name}</h1>
            <p className="capitalize">{user?.workStatus}</p>
            {user?.status === "verified" ? (
              <div className="flex items-center gap-1 w-fit border border-green-600 text-green-600 py-1 px-2 mt-2 rounded-sm">
                <ShieldCheck className="w-4 h-4" />
                <p className="text-sm">Verified</p>
              </div>
            ) : (
              <div className="flex items-center gap-1 w-fit border border-red-600 text-red-600 py-1 px-2 mt-2 rounded-sm">
                <BadgeAlert className="w-4 h-4" />
                <p className="text-sm">Verified</p>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-8">
            <Link to="/login">
              <Button className="w-full">Login</Button>
            </Link>
            <Link to="/mnjuser/register">
              <Button className="w-full mt-4">Register</Button>
            </Link>
          </div>
        )}
        <div className="w-full mt-4">
          <Link to="/">
            <Button
              className="w-full justify-start text-lg gap-2 mb-2"
              variant="ghost"
            >
              <Home className="w-5 h-5" />
              Home
            </Button>
          </Link>
          <Link to="/mnjuser/jobs">
            <Button
              className="w-full justify-start text-lg gap-2 mb-2"
              variant="ghost"
            >
              <Briefcase className="w-5 h-5" />
              Jobs
            </Button>
          </Link>
          <Link to="/mnjuser/companies">
            <Button
              className="w-full justify-start text-lg gap-2 mb-2"
              variant="ghost"
            >
              <Building2 className="w-5 h-5" />
              Companies
            </Button>
          </Link>
          {role && (
            <>
              <Link to="/mnjuser/appliedJobs">
                <Button
                  className="w-full justify-start text-lg gap-2 mb-2"
                  variant="ghost"
                >
                  <Building2 className="w-5 h-5" />
                  Applied Jobs
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                className="w-full justify-start text-lg gap-2"
                variant="ghost"
              >
                <LogOut className="w-5 h-5" />
                Log out
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
