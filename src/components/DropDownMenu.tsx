import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectCurrentUser } from "../features/auth/authSlice";
import {
  removeCompanyData,
  selectCurrentCompanyData,
} from "../features/company/companySlice";
import {
  removeUserData,
  selectCurrentUserData,
} from "../features/user/userSlice";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import AvatarImg from "../assets/user-default-profile.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type TMenu = {
  title: string;
  src: string;
  shortHand: string;
};

const DropDownMenu = ({ menu }: { menu: TMenu[] }) => {
  const { user, info } = useSelector(selectCurrentUserData);
  const company = useSelector(selectCurrentCompanyData);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    dispatch(removeUserData());
    dispatch(removeCompanyData());
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 z-0">
          <Avatar>
            <AvatarImage
              src={info?.photo || company?.info?.logo || AvatarImg}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="text-md text-700">{user.name}</h2>
          <ChevronDown className="w-[18px]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            {menu.map((item, index) => (
              <Link to={`${item.src}`} key={index}>
                <DropdownMenuItem key={index}>{item?.title}</DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogOut}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropDownMenu;
