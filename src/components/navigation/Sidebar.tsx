import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import DefaultImg from "../../assets/user-default-profile.png";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../../ui/sheet";

const Sidebar = () => {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button className="px-2"  variant="outline"><Menu /></Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Main menu</SheetTitle>
        </SheetHeader>
        <div className="flex items-center justify-center text-center bg-gray-50 rounded-lg border my-4">
          <div className="py-8">
            <img
              className="w-32 h-32 rounded-full border"
              src={DefaultImg}
              alt="avatar-img"
            />
            <h1 className="text-lg font-semibold mt-2">Sumit Kumar Das</h1>
            <p>Student Fresher</p>
            <Button className="mt-2" variant="destructive">
              Log Out
            </Button>
          </div>
        </div>
        <div className="w-full">
          <Link
            className="w-full block text-xl font-semibold bg-gray-50 rounded-lg border px-4 py-2"
            to="/"
          >
            Home
          </Link>
          <Link
            className="w-full block text-xl font-semibold bg-gray-50 rounded-lg border px-4 py-2 mt-2"
            to="/mnjuser/jobs"
          >
            Jobs
          </Link>
          <Link
            className="w-full block text-xl font-semibold bg-gray-50 rounded-lg border px-4 py-2 mt-2"
            to="/mnjuser/jobs"
          >
            Companies
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
