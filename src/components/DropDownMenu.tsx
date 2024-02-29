import { ChevronDown } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectCurrentCompanyData, removeCompanyData } from "../features/company/companySlice"
import { removeUserData, selectCurrentUserData } from "../features/user/userSlice"
import { logout, selectCurrentUser } from "../features/auth/authSlice"
type TMenu = {
    title: string,
    src: string,
    shortHand: string
}

const DropDownMenu = ({ menu }: { menu: TMenu[] }) => {
    const name = useSelector(selectCurrentUser);
    const { info } = useSelector(selectCurrentUserData);
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
                        <AvatarImage src={info?.photo || company?.info?.logo || "/user_img.png"} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h2 className="text-md text-700">{name}</h2>
                    <ChevronDown className="w-[18px]" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                        {
                            menu.map((item, index) => (
                                <Link to={`${item.src}`}>
                                    <DropdownMenuItem key={index}>
                                        {item?.title}
                                        <DropdownMenuShortcut>{item?.shortHand}</DropdownMenuShortcut>
                                    </DropdownMenuItem>
                                </Link>
                            ))
                        }
                        {/* <DropdownMenuItem>
                            Company Dashboard
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            View Jobs
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Post Job
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem> */}
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogOut}>
                        Logout
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default DropDownMenu