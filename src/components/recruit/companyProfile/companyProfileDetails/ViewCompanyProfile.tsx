import { Pencil } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../../ui/dialog";
import EditCompanyInfo from "./EditCompanyInfo";

type Profiledata = {
  description: string,
  type: string,
  tags: string[],
  teamSize: string,
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
      <div className="relative bg-white p-10 rounded-lg mt-5">
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
          <DialogContent className={"sm:max-w-[800px] rounded scrollbar-hide overflow-y-scroll max-h-[530px]"}>
            <DialogHeader>
              <DialogTitle>Edit Company Profile</DialogTitle>
            </DialogHeader>
            <EditCompanyInfo data={data} setOpen={setOpen} />
          </DialogContent>
        </Dialog>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Applicant Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Company type
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {data?.type}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Founded year
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {data?.founded}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Team size
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {data?.teamSize}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Tags
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {data?.tags?.map((item, index) => (
                  <span
                    className="mr-2 bg-slate-200 p-2 rounded-lg"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                About
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {data?.description}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default ViewCompanyProfile;
