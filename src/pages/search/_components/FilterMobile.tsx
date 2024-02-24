import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../../../ui/sheet";
import Filter from "./Filter";

const FilterMobile = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button className="px-2 gap-2" variant="outline">
          <SlidersHorizontal className="w-4 h-4" />
          <p>Filter</p>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <Filter />
      </SheetContent>
    </Sheet>
  );
};

export default FilterMobile;
