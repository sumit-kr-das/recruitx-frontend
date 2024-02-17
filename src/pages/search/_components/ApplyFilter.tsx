import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../ui/accordion";

const ApplyFilter = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Show by</AccordionTrigger>
        <AccordionContent>This is Sumit from another world</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ApplyFilter;
