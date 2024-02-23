import { Menu } from "lucide-react";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import SideBar from "../../layout/SideBar";
import { ScrollArea } from "../../ui/scroll-area";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button className="px-2" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <ScrollArea className="h-screen w-full pb-5">
          <SideBar />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
