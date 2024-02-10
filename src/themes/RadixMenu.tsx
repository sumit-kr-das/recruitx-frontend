import * as RadixAvatar from "@radix-ui/react-avatar";
import * as Menubar from "@radix-ui/react-menubar";
import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, selectCurrentUser } from "../features/auth/authSlice";
import userSlice, {
  removeUserData,
  selectCurrentUserData,
} from "../features/user/userSlice";

const RadixMenu = ({ menu }) => {
  const name = useSelector(selectCurrentUser);
  const { info } = useSelector(selectCurrentUserData);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    dispatch(removeUserData());
  };
  return (
    <Menubar.Root className="flex">
      <Menubar.Menu>
        <Menubar.Trigger className="outline-none select-none font-medium leading-none rounded text-[13px] flex items-center justify-between gap-[2px] ">
          <RadixAvatar.Root className="inline-flex h-[30px] w-[30px] select-none items-center justify-center overflow-hidden rounded-full align-middle cursor-pointer border-2">
            <RadixAvatar.Image
              className="h-full w-full rounded-[inherit] object-cover"
              src={info?.photo || "/user_img.png"}
              alt="Colm Tuite"
            />
          </RadixAvatar.Root>
          <h2 className="text-sm ml-1">{name}</h2>
          <ChevronDown className="w-[18px]" />
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="relative z-20 min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)] will-change-[transform,opacity]"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            {menu.map((item, index) => (
              <Link key={index} to={item.src}>
                <Menubar.Item className="group text-[13px] leading-none rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none cursor-pointer">
                  {item.title}{" "}
                  <div className="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                    {item.shortHand}
                  </div>
                </Menubar.Item>
              </Link>
            ))}
            <Menubar.Separator className="h-[1px] bg-gray-200 m-[5px]" />
            <Menubar.Item
              onClick={handleLogOut}
              className="group text-[13px] leading-none rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none cursor-pointer"
            >
              Log out{" "}
              <div className="ml-auto pl-5 text-mauve9 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                ⌘+E
              </div>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};

export default RadixMenu;
