import { Pencil } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../../ui/dialog";
import EditCompanyInfo from "./EditCompanyInfo";
import { Card } from "../../../../ui/card";
type Profiledata = {
  description: string,
  type: string,
  tags: string[],
  teamSize: number,
  founded: string,
  logo: string
}

const ViewCompanyProfile = ({
  data,
}: {
  data: Profiledata
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card className="relative p-5 bg-white rounded-lg border shadow mt-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <div
              onClick={() => setOpen((prev) => !prev)}
              title="edit"
              className=" absolute top-4 right-4 bg-slate-200 p-4 rounded-full cursor-pointer"
            >
              <Pencil className="w-[15px] h-[15px]" />
            </div>
          </DialogTrigger>
          <DialogContent className={"w-[90%] sm:max-w-[800px] rounded scrollbar-hide overflow-y-scroll max-h-[530px]"}>
            <DialogHeader>
              <DialogTitle>Edit Company Profile</DialogTitle>
            </DialogHeader>
            <EditCompanyInfo data={data} setOpen={setOpen} />
          </DialogContent>
        </Dialog>
        <div className="px-4 sm:px-0 mb-5">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">
            Applicant Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Personal details and application.
          </p>
        </div>
        <div className="mx-auto mt-5">
          <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-2">Company type</h2>
            <p className="text-gray-700">{data?.type}</p>
          </div>
          <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-2">Founded Year</h2>
            <p className="text-gray-700">{data?.founded}</p>
          </div>
          <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-2">Team Size</h2>
            <p className="text-gray-700">{data?.teamSize}</p>
          </div>
          <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-2">Tags</h2>
            <ul className="flex flex-wrap items-center gap-2  sm:gap-x-5 mt-2">
              {data?.tags?.map((item) => (
                <li
                  className="px-4 py-1 bg-white border rounded-full capitalize"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-700">{data?.description}</p>
          </div>
        </div>

      </Card>
    </>
  );
};

export default ViewCompanyProfile;
