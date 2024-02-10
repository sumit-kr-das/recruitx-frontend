import { Menu } from 'lucide-react'
import { Button } from "../../ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "../../ui/sheet";
import SideBar from '../../layout/SideBar';
import { ScrollArea } from '../../ui/scroll-area';

const MobileSidebar = () => {
    return (
        <Sheet >
            <SheetTrigger asChild>
                <Button className="px-2" variant="outline"><Menu /></Button>
            </SheetTrigger>
            <SheetContent side="left">
                <ScrollArea className='h-screen w-full pb-5'>
                    <SideBar />
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar